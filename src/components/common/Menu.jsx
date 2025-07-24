import React from 'react'
import { Link } from 'react-router-dom';
import "../../assets/css/menu.css";

const Menu = () => {
  return (
    <>
      <ul className="menu">
        <li className="menu-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="menu-item">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="menu-item">
          <Link to={"/product"}>Product</Link>
          <ul className="sub-menu">
            <li className="sub-menu-item">
              <Link to={"/product/women"}>Women</Link>
            </li>
            <li className="sub-menu-item">
              <Link to={"/product/men"}>Men</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <Link to={"/cart"}>Cart</Link>
        </li>
        <li className="menu-item">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default Menu