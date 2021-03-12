import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {Dropdown} from '../dropdown/Dropdown';
import "./Nav.css";



export const Nav = ({ user }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleIsClicked = () => setIsClicked(!isClicked);
    const closeMobileMenu = () => setIsClicked(false);

    const onMouseEnter = () =>
    setDropdown(window.innerWidth > 960 ? true : false);

  const onMouseLeave = () => setDropdown(false);


    const manageReviews = (
        <li className="nav-item nav-hover">
        <NavLink
          to="/reviews"
          className="nav-links"
          onClick={closeMobileMenu}
        
        >
          Manage Reviews
        </NavLink>
      </li>
    )


    return (
        <>
        <nav className='nav-bar'>
        <NavLink to='/' className='logo'>
            <h1>Tortuga</h1>
        </NavLink>

        <div className='menu-icon' onClick={handleIsClicked}>
        <i className={isClicked ? "either this" :"that"} />
        </div>

        <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item nav-hover">
            <NavLink to='/reviews'
             className='nav-link'
             className="nav-links"
             onClick={closeMobileMenu}>
                 Reviews
            </NavLink>
            </li>


            <li className="nav-item nav-hover ">
            <NavLink to='/register'
             className='nav-link'
             className="nav-links"
             onClick={closeMobileMenu}>
                 About
            </NavLink>
            </li>

            {user && manageReviews}

            <li className="nav-item">
            <NavLink
                to={user ? "/register" : "/login"}   
                className="nav-links-mobile"
                onClick={closeMobileMenu}
             >
              {user ? "Logout" : "Login"}
          </NavLink>
          </li>
          </ul>

          <li
          className="nav-item login toggle"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          >
          <NavLink to="#" className="nav-links" onClick={closeMobileMenu}>
            {user ? "Profile " : "Login "}
          </NavLink>
          {dropdown && <Dropdown user={user} />}
        </li>
        </nav>
            
        </>
    );
};
export default Nav;