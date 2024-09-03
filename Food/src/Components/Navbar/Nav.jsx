// import React, { useState } from 'react';
// import Button from '../Button/Button';
// import "./Nav.css";

// const Nav = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
  //     <>
//       <div className='Navbar'>
//         <div className='Navbar-items'>
//           <div className='Logo'>
//             <img src="IMPERIO_LOGO.png" alt="logo" />
//           </div>
//           <div className='hamburger' onClick={toggleMenu}>
//             &#9776; {/* Hamburger icon */}
//           </div>
//           <div className={`menu ${menuOpen ? 'show' : ''}`}>
//             <div className='Nav-text'>
//               <ul className='Nav-menu-list'>
//                 <li className='list'>Home</li>
//                 <li>Loyalty</li>
//                 <li>Menu</li>
//                 <li>Contact us</li>
//               </ul>
//               {/* Call us At <span className="phone-number">123XXXXXXXX</span> */}
//               <br />
//               <Button>Order At</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Nav;

import React, { useEffect, useRef, useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import toogle_light from '../../assets/frontend_assets/night.png'
import toogle_dark from '../../assets/frontend_assets/day.png'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../../assets/frontend_assets/IMPERIO_LOGO.png'

gsap.registerPlugin(ScrollTrigger);

const Nav = ({theme,setTheme}) => {
    const navbarRef = useRef(null);

    useEffect(() => {
      ScrollTrigger.create({
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          if (self.direction === 1) {
            // Scrolling down
            gsap.to(navbarRef.current, {
              backgroundColor: '#9b1b1f',
              color:'white',
              duration: 0.001
            });
          } else if (self.direction === -1 && self.progress < 0.05) {
            // Scrolling up and near the top
            gsap.to(navbarRef.current, {
              backgroundColor: 'transparent',
              color:'#9b1b1f',
              duration: 0.001
            });
          }
        }
      });
    }, []);


  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const toggle_mode =()=>{
        theme == 'light' ? setTheme('dark') : setTheme('light');
      }
      
      return (
        <nav className='navbar' ref={navbarRef}>
        
      <Link to="/"><img className='Logo' src={logo} alt="" /></Link>
        <div className='hamburger' onClick={toggleMenu}>
        &#9776; 
        </div>
        <div className={`menu ${menuOpen ? 'show' : ''}`}>
        <ul className='Nav-List'>
            <li className='nav-home'>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Loyalty">Loyalty</Link>
            </li>
            <li>
              <Link to="/Menu">Menu</Link>
            </li>
            <li>
              <Link to="/Contact">Contact us</Link>
            </li>
      </ul>
            <Button className='button'>Order At</Button>
      </div>
        <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt='' className='toggle-icon'/> 
      {/* <div className='button'>
      </div> */}

      </nav>
  )
}

export default Nav
