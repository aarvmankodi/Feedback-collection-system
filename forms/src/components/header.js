import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './header.css'; // You can define your CSS styles for the header in this file
import { useNavigate } from 'react-router-dom';


function Header() {
    const Navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState('close');

    const toggleMenuOpen = () => {
        if ( menuOpen === 'open')
            setMenuOpen('close');
        else
            setMenuOpen('open');
    };  
    const logOut = () => {
        Navigate("/");
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
