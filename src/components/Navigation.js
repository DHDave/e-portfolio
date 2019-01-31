import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className='navigation-link'> 
            <NavLink to='/'>About</NavLink>
            <NavLink to='/Portfolio'>Portfolio</NavLink> 
            <NavLink to='/Contact'>Contact</NavLink>
        </div>
    );
};

export default Navigation;
