import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 



function Login() {
  const [formData, setFormData] = useState({form:'Account' ,name: '', email: '', password: ''});


  const [action,setAction] = useState("Login");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };



  

  const handleLogin  = async (e) => {
    e.preventDefault();
    document.cookie = "loginStatus=failed; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
    if (action === 'Login'){
      try {
        console.log(formData.email);
        const response = await axios.post('http://localhost:3001/login', formData);
        if (response.status === 200) {
          console.log("gggg" , response)
          document.cookie = "loginStatus=success; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
          document.cookie = `UserEmail=${formData.email}; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/`;
          let date = new Date();
        const message = {
        msg:  `User ${formData.email} logged in`,
        date: date,
        type : 'notification'
        };

        await axios.post('http://localhost:3001/user-forms/history', { message });
          navigate("/forms");
          // You can redirect the user to another page here if needed
        } else {
          toast.error('User not Found');
        }
      } catch (error) {
        console.error('Error during login:', error);
        toast.error('Error while loggin in');
      }
    }
    
    
  };
  const handleSignUp = async (e) => {
    
    
    e.preventDefault();
    if (action === 'Login'){
      navigate("/signUp");
    }
  };
  
  return (
    <div className='external'>
    <div className='container'>
      <div className='text'>{action}</div>
      <div className='underline-login'></div>
      <div className='entries'>
      
      {action==='Login'?<div></div>:
      <div className='name inp'>
      <FontAwesomeIcon icon={faUser}/>
       <input type='text' placeholder='name' name='name' onChange={handleInputChange}></input>
      </div>
       }

      <div className='email inp'>
      <FontAwesomeIcon icon={faEnvelope}/>
       <input type='email' placeholder='email' name='email' onChange={handleInputChange}></input>
       </div>
      
      <div className='password inp'>
      <FontAwesomeIcon icon={faLock}/> <input type='password' id='pass1' onChange={handleInputChange} placeholder='password' name='password'></input>
      </div>
      {action==='Login'?<div></div>:
       <div className='password inp'>
      <FontAwesomeIcon icon={faLock}/> <input type='password' id='pass2' placeholder='Retype password' name='Retypedpassword'></input>
      </div>}
      
      <div className='submit'>
        <div className='sub' onClick={handleLogin}>Log In</div>
        <div className='sub grey' onClick={handleSignUp}>Sign Up</div>
      </div>
      </div>
      
    </div>
    </div>
  );
}

export default Login;
