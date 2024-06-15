import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { toast } from 'react-toastify'; 
import axios from 'axios';


function Login() {
  const [formData, setFormData] = useState({form:'Account-client' ,name: '', password: ''});
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
    console.log("eeee")
      try {
        console.log(formData.email);
        const response = await axios.post('http://localhost:3001/login', formData);
        if (response.status === 200) {
          console.log("gggg" , response)
          toast.success("user logged in")
          document.cookie = "loginStatus=success; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
          navigate("/main");
          // You can redirect the user to another page here if needed
        } else {
          console.log(response)
          toast.error('User not Found');
        }
      } catch (error) {
        console.error('Error during login:', error);
        toast.error('Error while loggin in');
      }
    
    
    
  };

  const handleSignUp = async (e) => {
    
    
    e.preventDefault();
    document.cookie = "loginStatus=failed; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
    
      try {
        console.log(formData.email);
        const response = await axios.post('http://localhost:3001/user-forms', formData);
        if (response.status === 200) {
          console.log("gggg" , response)
          toast.success("new user added")
          document.cookie = "loginStatus=success; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
          
          navigate("/main");
          // You can redirect the user to another page here if needed
        } else {
          toast.error('User not Found');
        }
      } catch (error) {
        console.error('Error during login:', error);
        toast.error('Error while loggin in');
      }
    
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            name="name"
            type="text"
            onChange={handleInputChange}
            
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            name="password"
            type="password"
            onChange={handleInputChange}
            
          />
        </div>
        <button  onClick={handleLogin}>Login</button>
        <button  onClick={handleSignUp}>SignUp</button>
      </form>
    </div>
  );
}

export default Login;