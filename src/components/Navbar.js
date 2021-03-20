import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <ul className='ul-nav'>
                    <li className='li-nav'>
                        <a className='a-nav' href='/'>Home</a>
                    </li>

                    <li className='li-nav'>
                        <a className='a-nav' href='#about'>About Me</a>
                    </li>

                    <li className='li-nav'>
                        <a className='a-nav' href='#skills'>Skills</a>
                    </li>

                    <li className='li-nav'>
                        <a className='a-nav' href='#contact'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
