import React, { useState } from 'react';
import Button from '../Button/Button';
import "./Nav.css";
import ExploreMenu from '../ExploreMenu/ExploreMenu';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='Navbar'>
        <div className='Navbar-items'>
          <div className='Logo'>
            <img src="IMPERIO_LOGO.png" alt="logo" />
          </div>
          <div className='hamburger' onClick={toggleMenu}>
            &#9776; {/* Hamburger icon */}
          </div>
          <div className={`menu ${menuOpen ? 'show' : ''}`}>
            <div className='Nav-text'>
              Call us At <span className="phone-number">123XXXXXXXX</span>
            </div>
            <Button className="Nav-button">Order At</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
