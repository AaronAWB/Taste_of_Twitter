import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className ='navbar navbar-nav bg-light shadow-sm'>
            <div className='container-fluid d-flex justify-content: start'>
                <div className='container'>
                    <a className='navbar-brand'>Logo</a>
                </div>
                <div className ='container d-flex justify-contant: start'>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>Search</li>
                    <li className='nav-item'>Tweets</li>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;