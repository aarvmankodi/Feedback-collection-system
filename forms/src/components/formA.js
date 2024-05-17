import React , { useEffect , useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './formA.css';
import { toast } from 'react-toastify'; 


function FormA() {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({form:'A' ,name: '',email: '', rating: '' });
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
    // Function to handle form input changes
    const handleInputChange = (e) => {
        setFormData(prevFormData => ({
          ...prevFormData,
          [e.target.name]: e.target.value
        }));
      };
      

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
      const handleReset = (e) => {
        setFormData( ()=> ({
            [e.target.name] : ''
        }))
    }

return (
    <>
    
    <div className='formA'>
    
    <form id='form' onSubmit={handleSubmit}>
    <div className='head'>Ratings Form</div>
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
        <span>1<input type='radio' className='radio' name='rating' onChange={handleInputChange} value='1' /></span>
        <span>2<input type='radio' className='radio' name='rating' onChange={handleInputChange} value='2'/></span>
        <span>3<input type='radio' className='radio' name='rating' onChange={handleInputChange} value='3'/></span>
        <span> 4<input type='radio' className='radio' name='rating' onChange={handleInputChange} value='4'/></span>
        <span>5<input type='radio' className='radio' name='rating' onChange={handleInputChange} value='5'/></span>
        <span>6<input type='radio' className='radio' name='rating' onChange={handleInputChange} value='6'/></span>
        <span>7<input type='radio' className='radio' name='rating' onChange={handleInputChange} value='7'/></span>
        <span>8<input type='radio' className='radio' name='rating' onChange={handleInputChange} value='8'/></span>
        <span>9<input type='radio' className='radio' name='rating' onChange={handleInputChange} value='9'/></span>
        <span>10<input type='radio' className='radio' name='rating' onChange={handleInputChange} value='10'/></span>
        </div> </div>
        <div id='buttons'><input type='submit' id='submit'/>    
        <input type='reset' id='reset'  onClick={handleReset}/></div>
          
        
    </form>
    </div>
    </>
);

}

export default FormA;