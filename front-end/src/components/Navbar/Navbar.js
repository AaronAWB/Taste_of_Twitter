import React from 'react';
import './Navbar.css'
import Orange_Icon from '../../assets/icons/orange.png'

const Navbar = () => {
    return(
        <nav className ='navbar bg-light shadow-lg'>
            <div className="container-fluid">
                
                <a className='navbar-brand' href='/'>
                    <img 
                    src={Orange_Icon} 
                    alt='Taste of Twitter' 
                    width='50' 
                    height='50'
                    ></img>
                </a>
            
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
            
            </div>
        </nav>
    );
}

export default Navbar;