import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './login.css';


export default function Login() {

    
    return (
        <div className='external'>
    <div className='container'>
      <div className='text'>Log in</div>
      <div className='underline-login'></div>
      <div className='entries'>
      
      
      <div className='name inp'>
      <FontAwesomeIcon icon={faUser}/>
       <input type='text' placeholder='name' name='name'></input>
      </div>
       

      <div className='email inp'>
      <FontAwesomeIcon icon={faEnvelope}/>
       <input type='email' placeholder='email' name='email'></input>
       </div>
      
      <div className='password inp'>
      <FontAwesomeIcon icon={faLock}/> <input type='password' id='pass1' placeholder='password' name='password'></input>
      </div>
     
       <div className='password inp'>
      <FontAwesomeIcon icon={faLock}/> <input type='password' id='pass2' placeholder='Retype password' name='Retypedpassword'></input>
      </div>
      
      <div className='submit'>
        <div className='sub'>Log In</div>
        <div className='sub'>Sign Up</div>
      </div>
      </div>
      
    </div>
    </div>
  );
    
}
