import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import "./Dropdown.css";



export const Dropdown = ({ user }) => {
    const [isClicked, setIsClicked] = useState(false);

    const authenticatedOptions = (
        <>
        <li>
            <div className='user-info'>
                Logged in as: {user && user.username}
            </div>
        </li>
        <li className='dropdown-hover'>
            <NavLink to={`/review`}
            className='dropdown-link'>Reviews</NavLink>
        </li>
        <li  className='dropdown-hover'>
            <NavLink to={`/sign-out`}
            className='dropdown-link'>Sign Out</NavLink>
        </li>
        </>
    );

    const unauthenticatedOptions = (
        <>
        <li className='dropdown-hover'>
            <NavLink to='/login' className='dropdown-link'>Login</NavLink>
        </li>
        <li className='dropdown-hover'>
            <NavLink to='/register' className='dropdown-link'>Register</NavLink>
        </li>
        </>
    );



    return (
        <>
        <ul
            onClick={() => setIsClicked(false)}
            className={isClicked ? 'dropdown-menu clicked' :
        'dropdown-menu' }
        >
            {user  ? authenticatedOptions  :  unauthenticatedOptions}
        </ul>
            
        </>
    );
};

