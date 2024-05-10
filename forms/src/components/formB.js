import React , {useState}from 'react';
import axios from 'axios';
import './formB.css';
function FormB() {
    const [formData, setFormData] = useState({form:'B' ,name: '', email: '', dob: '', address: '', location: '' , github: '' });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        setFormData(prevFormData => ({
          ...prevFormData,
          [e.target.name]: e.target.value
        }));
      };
      const handleReset = (e) => {
        setFormData( ()=> ({
            [e.target.name] : ''
        }))
    }
    
      

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          // Send POST request to backend API endpoint
          await axios.post('http://localhost:3001/user-forms', formData);
          alert('Form submitted successfully');
          // Clear form data after submitting
        //   setFormData({ name: '', rating: '' });
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Failed to submit form');
        }
      };

return (
    <>
    
    <div className='formB'>
    
    <form id='form' onSubmit={handleSubmit} >
    <div className='head'>Application Form</div>
    <div className='underline'></div>
        <div className='form'>
        <div className='txt'>Name</div>
        <input type='text' id='name-form' placeholder='Enter name' name='name' onChange={handleInputChange}/>
        </div>
        <div className='form'>
        <div className='txt'>Email</div>
        <input type='email' id='email-form' placeholder='Enter email' name='email' onChange={handleInputChange}/>
        </div>
        <div className='form'>
        <div className='txt'>Date of Birth</div>
        <input type='date' id='dob-form' placeholder='Enter dob' name='dob' onChange={handleInputChange}/>
        </div>
        <div className='form'>
        <div className='txt'>Address</div>
        <input type='text' id='address-form' placeholder='Enter address' name='address' onChange={handleInputChange}/>
        </div>
        <div className='form form-radio'>
        <div className='work txt'>Work Location</div>
        <span id='first-radio'>Mumbai<input type='radio' className='radio' name='location' value='Mumbai' onChange={handleInputChange}/></span>
        <span>Pune<input type='radio' className='radio' name='location' value='Pune' onChange={handleInputChange}/></span>
        <span>Bangaluru<input type='radio' className='radio' name='location' value='Bangaluru' onChange={handleInputChange}/></span>
        <span>Hydrabad<input type='radio' className='radio' name='location' value='Hydrabad' onChange={handleInputChange}/></span>
        </div>
        <div className='form'>
        <div className='txt'>Enter your github</div>
        <input type='url' id='form-file' name='github' onChange={handleInputChange}/>
        </div>
        <div id='buttons'><input type='submit' id='submit'/>    
        <input type='reset' id='reset'  onClick={handleReset}/></div>
          
        
    </form>
    </div>
    </>
);

}

export default FormB;