import React from "react";
import "./nav.css";
import satya from "./satya.png";
import { Link } from "react-router-dom";

export default function Nav() {
  const user = true;
  return (
    <div className="nav">
      <div className="navLeft">
        <i className="navIcon fa-brands fa-facebook-square"></i>{" "}
        <i className="navIcon fa-brands fa-twitter"></i>
        <i className="navIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="navListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <img className="navImg" src={satya} alt="" />
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
