import React from "react";
import "./nav.css";
import satya from './satya.png'

export default function Nav() {
  return (
    <div className="nav">
      <div className="navLeft">
        <i className="navIcon fa-brands fa-facebook-square"></i>{' '}
        <i className="navIcon fa-brands fa-twitter"></i>
        <i className="navIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className='navListItem'>HOME</li>
          <li className='navListItem'>ABOUT</li>
          <li className='navListItem'>CONTACT</li>
          <li className='navListItem'>WRITE</li>
          <li className='navListItem'>LOGOUT</li>
        </ul>
      </div>
      <div className="navRight">
        <img className='navImg'src={satya} alt="" />
        <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
