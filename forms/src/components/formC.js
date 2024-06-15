import React , { useEffect , useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './formC.css';
import { toast } from 'react-toastify'; 


function FormC() {
  const navigate = useNavigate();
  useEffect(() => {
    // Check if loginStatus cookie exists and its value is "success"
    const loginStatus = getCookie("loginStatus");
    if (loginStatus !== "success") {
      // Redirect to login page if loginStatus is not "success"
      navigate("/");
    }
  }, [navigate]);

  const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName.trim() === name) {
        return cookieValue;
      }
    }
    return "";
  };
    const [formData, setFormData] = useState({form:'C' ,name: '', email: '', rating: '', feedback: '' });

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
          toast.success('Form submitted successfully');
          let date = new Date();
          const message = {
          msg:  ` User ${formData.name} submitted feedback form`,
          date: date,
          type : 'activity'
          };

           await axios.post('http://localhost:3001/user-forms/history', { message });
        } catch (error) {
          console.error('Error submitting form:', error);
          toast.error('Failed to submit form');
        }
      };

return (
    <>
    
    <div className='formC' onSubmit={handleSubmit}>
    
    <form id='form'>
    <div className='head'>Feedback Form</div>
    <div className='underline'></div>
        <div className='form'>
        <div className='txt'>Name</div>
        <input type='text' id='name-form' placeholder='Enter name' name='name' onChange={handleInputChange}/>
        </div>
        <div className='form'>
        <div className='txt'>Email</div>
        <input type='email' id='email-form' placeholder='Enter email' name='email' onChange={handleInputChange}/>
        </div>
    
        <div className='rating'>
        <div className='txt rate-prod'>Rate Product</div>
        <div className='rate'>
        <span>1<input type='radio' className='radio' name='rating' value='1' onChange={handleInputChange}/></span>
        <span>2<input type='radio' className='radio' name='rating' value='2' onChange={handleInputChange}/></span>
        <span>3<input type='radio' className='radio' name='rating' value='3' onChange={handleInputChange}/></span>
        <span> 4<input type='radio' className='radio' name='rating' value='4' onChange={handleInputChange}/></span>
        <span>5<input type='radio' className='radio' name='rating' value='5' onChange={handleInputChange}/></span>
        <span>6<input type='radio' className='radio' name='rating' value='6' onChange={handleInputChange}/></span>
        <span>7<input type='radio' className='radio' name='rating' value='7' onChange={handleInputChange}/></span>
        <span>8<input type='radio' className='radio' name='rating' value='8' onChange={handleInputChange}/></span>
        <span>9<input type='radio' className='radio' name='rating' value='9' onChange={handleInputChange}/></span>
        <span>10<input type='radio' className='radio' name='rating' value='10' onChange={handleInputChange}/></span>
        </div> </div>

        <div className='form form-feed'>
        <div className='txt'>Enter feedback</div>
        <textarea type='file' id='form-feedback' name='feedback' onChange={handleInputChange}/>
        </div>





        <div id='buttons'><input type='submit' id='submit'/>    
        <input type='reset' id='reset'  onClick={handleReset}/></div>
          
        
    </form>
    </div>
    </>
);

}

export default FormC;