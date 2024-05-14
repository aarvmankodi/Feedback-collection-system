import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import './land.css';

export default function Landing() {
    const [action,setAction] = useState("Login");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/login");
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        navigate("/signUp");
    }
    return (
        <div className='land'>
            <h1>Form Submission Project</h1>
            <div className='submit'>
            <div className='sub' onClick={handleLogin}>Log In</div>
            <div className='sub' onClick={handleSignUp}>Sign Up</div>
        </div>
        </div>
    )
}
