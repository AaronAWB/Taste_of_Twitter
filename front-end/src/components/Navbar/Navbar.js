import { React, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import Orange_Icon from '../../assets/icons/orange.png'

const Navbar = () => {

    const location = useLocation();
    const [activeLink, setActiveLink] = useState('/');

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return(
        <nav className ='navbar bg-light shadow-lg'>
            <div className='container-fluid'>
                
                <Link className='navbar-brand' to='/'>
                    <img 
                    src={Orange_Icon} 
                    alt='Taste of Twitter' 
                    width='50' 
                    height='50'
                    ></img>
                </Link>
            
                <ul className='nav'>
                    <li className={`nav-item ${activeLink === '/' ? 'active' : ''}`}>
                        <Link to='/' className='nav-link'>
                            Home
                        </Link>
                    </li>
                    <li className={`nav-item ${activeLink === '/search' ? 'active' : ''}`}>
                        <Link to='/search' className='nav-link'>
                            Search
                        </Link>
                    </li>
                    <li className={`nav-item ${activeLink === '/random' ? 'active' : ''}`}>
                        <Link to='/random' className='nav-link'>
                            Random
                        </Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    );
}

export default Navbar;