import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className ='navbar navbar-nav bg-light shadow-sm'>
            <div className='container-fluid d-flex justify-content-start'>
                <a className='navbar-brand'>Logo</a>
                <ul>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>Search</li>
                    <li className='nav-item'>Tweets</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;