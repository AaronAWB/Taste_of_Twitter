import React from 'react';

const Navbar = () => {
    return(
        <nav className ='navbar navbar-light bg-light shadow-sm'>
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
                    <a href='tweets' className='nav-link'>
                        Tweets
                    </a>
            </ul>
        </nav>
    );
}

export default Navbar;