import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/' className="navBtn">Home </Link>
            <Link to='/about' className="navBtn">About </Link>
            <Link to='/messages'className="navBtn">Messages </Link>
        </nav>
    );
}

export default Navbar;