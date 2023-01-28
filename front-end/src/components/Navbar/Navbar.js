import React from 'react';
import './Navbar.css'
import Orange_Icon from '../../assets/icons/orange.png'
const Navbar = () => {
    return(
        <nav className ='navbar navbar-light bg-light shadow-lg'>
            <div className="container">
                <a className="navbar-brand">
                    <img 
                    src={Orange_Icon} 
                    alt='Taste of Twitter' 
                    width='50' 
                    height='50'
                    ></img>
                </a>
            </div>
            <ul className='nav'>
                <li className='nav-item active'></li>
                    <a href='/' className='nav-link'>
                        Home
                    </a>
                <li className='nav-item active'></li>
                    <a href='/search' className='nav-link'>
                        Search
                    </a>
                <li className='nav-item active'></li>
                    <a href='/random' className='nav-link'>
                        Random
                    </a>
            </ul>
        </nav>
    );
}

export default Navbar;