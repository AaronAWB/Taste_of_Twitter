import React from 'react';

const Navbar = () => {
    return(
        <nav className ='navbar navbar-light bg-light shadow-sm'>
            <ul className='nav'>
                <li className='nav-item active'></li>
                    <a href='#' className='nav-link active'>
                        Home
                    </a>
                <li className='nav-item active'></li>
                    <a href='#' className='nav-link'>
                        Search
                    </a>
                <li className='nav-item active'></li>
                    <a href='#' className='nav-link'>
                        Tweets
                    </a>
            </ul>
        </nav>
    );
}

export default Navbar;