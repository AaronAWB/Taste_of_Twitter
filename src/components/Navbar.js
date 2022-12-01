import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className ='navbar navbar-nav bg-light shadow'>
            <div className='container-fluid'>
                <a className='navbar-brand'>Logo</a>
            </div>
            <div className ='container-fluid'>
                <li>Home</li>
                <li>Search</li>
                <li>Tweets</li>
            </div>
        </nav>
    );
}

export default Navbar;