import React, { useState } from 'react';
import logo from '../images/Logo.svg'


//functional component named Nav, uses the useState hook to create state var menuOpen and function setMenuOpen to update it (initial state = false so closed)
const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    //toggle value of menuOpen between true and false
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        //render navigation bar
        <nav className ={`navbar ${menuOpen ? "open" : ""}`}>
            <a href = '/' className='logo'>
                    <img src ={logo} alt='logo' />
                </a>

            {/* for mobile/ hamburger menu*/}
            <div className ="menu-icon" onClick={toggleMenu}>
                <div className= 'bar'></div>
                <div className= 'bar'></div>
                <div className= 'bar'></div>
                <div className= 'bar'></div>

            </div>

            {/* nav bar items*/}
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Services</a>
                </li>
                <li>
                    <a href='/'>Menu</a>
                </li>
                <li>
                    <a href='/booking'>Reservations</a>
                </li>
                <li>
                    <a href='/'>Order Online</a>
                </li>
                <li>
                    <a href='/'>Login</a>
                </li>

            </ul>

        </nav>
    );
};

export default Nav;