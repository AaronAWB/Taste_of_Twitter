import { React, useState } from 'react';
import './Navbar.css'
import Orange_Icon from '../../assets/icons/orange.png'

const Navbar = () => {

    const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };



    return(
        <nav className ='navbar bg-light shadow-lg'>
            <div className='container-fluid'>
                
                <a className='navbar-brand' href='/' onClick={() => handleLinkClick('/')}>
                    <img 
                    src={Orange_Icon} 
                    alt='Taste of Twitter' 
                    width='50' 
                    height='50'
                    ></img>
                </a>
            
                <ul className='nav'>
                    <li className={`nav-item ${activeLink === '/' ? 'active' : ''}`}>
                        <a href='/' className='nav-link' onClick={() => handleLinkClick('/')}>
                            Home
                        </a>
                    </li>
                    <li className={`nav-item ${activeLink === '/search' ? 'active' : ''}`}>
                        <a href='/search' className='nav-link' onClick={() => handleLinkClick('/search')}>
                            Search
                        </a>
                    </li>
                    <li className={`nav-item ${activeLink === '/random' ? 'active' : ''}`}>
                        <a href='/random' className='nav-link' onClick={() => handleLinkClick('/random')}>
                            Random
                        </a>
                    </li>
                </ul>
            
            </div>
        </nav>
    );
}

export default Navbar;