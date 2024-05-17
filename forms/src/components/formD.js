import React , { useEffect , useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './formD.css';
import { toast } from 'react-toastify'; 

function FormD() {
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

    const [formData, setFormData] = useState({form:'D' ,name: '', email: '', rating: '', rating2: '', rating3: '',reference: '', recommend: '', feedback: '' });

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
          // toast.success('Form submitted successfully');
          toast.success('Form submitted successfully'); // Display success toast
          // Clear form data after submitting
        //   setFormData({ name: '', rating: '' });
        } catch (error) {
          console.error('Error submitting form:', error);
          toast.error('Failed to submit form');
        }
      };

return (
    <>
    
    <div className='formD'>
    
    <form id='form' onSubmit={handleSubmit}>
    <div className='head'>Survey Form</div>
    <div className='underline'></div>
        <div className='form'>
        <div className='txt'>Name</div>
        <input type='text' id='name-form' placeholder='Enter name' name='name' onChange={handleInputChange}/>
        </div>
        <div className='form'>
        <div className='txt'>Email</div>
        <input type='email' id='email-form' placeholder='Enter email' name='email' onChange={handleInputChange}/>
        </div>
    
        <div className='rating' >
        <div className='txt rate-prod'>Rate Product 1</div>
        <div className='rate'>
        <span>1<input type='radio' className='radio' name='rating' value='1' onChange={handleInputChange}/></span>
        <span>2<input type='radio' className='radio' name='rating' value='2' onChange={handleInputChange}/></span>
        <span>3<input type='radio' className='radio' name='rating' value='3' onChange={handleInputChange}/></span>
        <span> 4<input type='radio' className='radio' name='rating' value='4' onChange={handleInputChange}/></span>
        <span>5<input type='radio' className='radio' name='rating' value='5' onChange={handleInputChange}/></span>
        
        </div> </div>

        <div className='rating'>
        <div className='txt rate-prod'>Rate Product 2</div>
        <div className='rate'>
        <span>1<input type='radio' className='radio' name='rating2' value='1' onChange={handleInputChange}/></span>
        <span>2<input type='radio' className='radio' name='rating2' value='2' onChange={handleInputChange}/></span>
        <span>3<input type='radio' className='radio' name='rating2' value='3' onChange={handleInputChange}/></span>
        <span> 4<input type='radio' className='radio' name='rating2' value='4' onChange={handleInputChange}/></span>
        <span>5<input type='radio' className='radio' name='rating2' value='5' onChange={handleInputChange}/></span>
       
        </div> </div>

        <div className='rating'>
        <div className='txt rate-prod'>Rate Product 3</div>
        <div className='rate'>
        <span>1<input type='radio' className='radio' name='rating3' value='1' onChange={handleInputChange}/></span>
        <span>2<input type='radio' className='radio' name='rating3' value='2' onChange={handleInputChange}/></span>
        <span>3<input type='radio' className='radio' name='rating3' value='3' onChange={handleInputChange}/></span>
        <span> 4<input type='radio' className='radio' name='rating3' value='4' onChange={handleInputChange}/></span>
        <span>5<input type='radio' className='radio' name='rating3' value='5' onChange={handleInputChange}/></span>
      
        </div>
        </div> 
        <div className='form form-choice'>
        <div className='txt choice'>Where did you first hear about these products</div>
        <select id='option-select' name='reference' onChange={handleInputChange}>
            <option>Select</option>
            <option>Word of mouth</option>
            <option>Social Media</option>
            <option>Workplace</option>
        </select>
        </div>

        <div className='rating'>
        <div className='txt choice'>How likely are you to recommend these products</div>
        <div className='rate'>
        <span>Very Unlikely<input type='radio' className='radio' name='recommend' value='Very Unlikely' onChange={handleInputChange}/></span>
        <span>Unlikely<input type='radio' className='radio' name='recommend' value='Unlikely' onChange={handleInputChange}/></span>
        <span>Unsure<input type='radio' className='radio' name='recommend' value='Unsure' onChange={handleInputChange}/></span>
        <span> Likely<input type='radio' className='radio' name='recommend' value='Likely' onChange={handleInputChange}/></span>
        <span>Very Likely<input type='radio' className='radio' name='recommend' value='Very Likely' onChange={handleInputChange}/></span>
      
        </div>
        </div>


        <div className='form form-feed'>
        <div className='txt'>Enter additional feedback</div>
        <textarea type='file' id='form-feedback' name='feedback' onChange={handleInputChange}/>
        </div>





        <div id='buttons'><input type='submit' id='submit'/>    
        <input type='reset' id='reset' onClick={handleReset}/></div>
          
        
    </form>
    </div>
    </>
);

}

export default FormD;