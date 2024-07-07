import React from 'react';
import Image from '../Images/mithun_logo.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './Navbar.css';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.style.display = 'flex';
    }
  }

  const closeSideBar = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.style.display = 'none';
    }
  }
  return (
    <div className='main-navbar'>
  <div className='navbar'>
      <div>
        <img src={Image} width={200} alt="mithun_logo" style={{marginLeft:'15%'}} />
      </div>
      <div className='navlinks'>
      <ul className='sidebar'>
          <li><CloseIcon onClick={closeSideBar}/></li>
          <li><Link to="" >Home</Link></li>
          <li><Link to="/about">About </Link></li>
          <li><Link to="/servives">Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
         
          <li><Button variant='contained' style={{ backgroundColor:'#ffb400', textTransform:'capitalize' }}> Book Now</Button></li>
        </ul>
        <ul>
          <li className='hideOnMobile'><Link to="" >Home</Link></li>
          <li className='hideOnMobile'><Link to="/about">About</Link></li>
          <li className='hideOnMobile'><Link to="/servives">Services</Link></li>
          <li className='hideOnMobile'><Link to="/contact">Contact us </Link></li>
         
          <li className='hideOnMobile'><Button variant='contained' style={{ backgroundColor:'#ffb400', textTransform:'capitalize' }}> Book Now</Button></li>
          <li className='menu-button'><MenuOpenIcon onClick={showSidebar} style={{fontSize:'45px',color:'#ffb400'}}/></li>
        </ul>
      </div>
    </div>
    </div>
  
  );
}

export default Navbar;
