import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Welcome To Tshirt Mania!!</h2>
            <nav className='header'>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to="/orderreview">Order Review</CustomLink>
                <CustomLink to="/grandpa">Grandpa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;