import React , {useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './header.css'; // You can define your CSS styles for the header in this file
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Header() {
    const Navigate = useNavigate();
    const [UserEmail , setUserEmail] = useState('none');
    const [menuOpen, setMenuOpen] = useState('close');
    
  
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
    const toggleMenuOpen = () => {
      setUserEmail(getCookie("UserEmail"));
      console.log(UserEmail)
        if ( menuOpen === 'open')
            setMenuOpen('close');
        else
            setMenuOpen('open');
    };  
    const logOut = async () => {
        
        Navigate("/");
        document.cookie = "loginStatus=failed; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
        document.cookie = `UserEmail=none; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/`;
        setUserEmail(getCookie("UserEmail"));
      console.log(UserEmail)
        let date = new Date();
        const message = {
        msg:  `User ${UserEmail} logged out`,
        date: date,
        type : 'notification'
        };

        await axios.post('http://localhost:3001/user-forms/history', { message });
        setMenuOpen('close');
    }

    
    return (    
        <header className="header">
        <div className="profile-icon">
            <FontAwesomeIcon icon={faUserCircle} size="2x"  onClick={toggleMenuOpen} />
          <div className={`menu ${menuOpen==="open"?"visible" : "hidden"}`}>
            <ul>
              <li onClick={logOut}><FontAwesomeIcon icon={faSignOutAlt} className='icon' />Logout</li>
            </ul>
          </div>
        </div>
        </header>
    );
}

export default Header;
