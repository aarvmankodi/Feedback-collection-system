import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

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

    if (action === 'Login'){
      try {
        const response = await axios.post('http://localhost:3001/login', formData);
        if (response.status === 200) {
          // If login is successful, display a success message to the user
          navigate("/forms");
          // You can redirect the user to another page here if needed
        } else {
          alert('User not Found');
          window.location.reload();
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('Error while loggin in');
        window.location.reload();
      }
    }
    
    else if (action === 'SignUp'){
      setAction("Login")
      
    }
  };
  const handleSignUp = async (e) => {
    
    
    e.preventDefault();
    if (action === 'Login'){
      setAction("SignUp")
    }
    
    else if (action==='SignUp'){
      let password1 = document.getElementById('pass1').value;
    let password2 = document.getElementById('pass2').value;
      if (password1 === password2 && password1!== ''){
        try {

          await axios.post('http://localhost:3001/user-forms', formData);
          alert('New User Added');
          window.location.reload();
          
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Failed to submit form');
          window.location.reload();
        }
      } else {
        alert("Ensure both passwords are same");
      }
      
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
        <div className={action==='Login'?'sub':'sub grey'} onClick={handleLogin}>Log In</div>
        <div className={action==='Login'?'sub grey':'sub'} onClick={handleSignUp}>Sign Up</div>
      </div>
      </div>
      
    </div>
    </div>
  );
}

export default Login;
