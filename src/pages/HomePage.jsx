import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h2>Welcome to Product Management App</h2>
      <ul className="menu">
        <li className="menu-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="menu-item">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="menu-item">
          <Link to={"/"}>Product</Link>
          <ul className="sub-menu">
            <li className="sub-menu-item">
              <Link to={"/"}>Women</Link>
            </li>
            <li className="sub-menu-item">
              <Link to={"/"}>Men</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage