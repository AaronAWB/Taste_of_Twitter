import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className ='navbar navbar-light bg-light shadow-lg'>
            <div className="container">
                <a className="navbar-brand">
                    <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Twitter Showcase" width="30" height="24"></img>
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