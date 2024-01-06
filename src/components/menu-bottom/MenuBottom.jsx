import React from "react";
import './Menu.css';

const MenuBottom  = () => {
    return(
        <>
  {/* bottom menu */}
  <nav className="nav">
    <a href="#heroSection" className="nav__link">
      <i className="material-icons nav__icon">dashboard</i>
      <span className="nav__text">Top</span>
    </a>
    <a href="#mempelai" className="nav__link nav__link">
      <i className="material-icons nav__icon">person </i>
      <span className="nav__text">Mempelai</span>
    </a>
    <a href="#lokasi" className="nav__link">
      <i className="material-icons nav__icon">map</i>
      <span className="nav__text">Info</span>
    </a>
    <a href="#gallery" className="nav__link">
      <i className="material-icons nav__icon">photo</i>
      <span className="nav__text">Galery</span>
    </a>
    <a href="#amplop" className="nav__link">
      <i className="material-icons nav__icon">redeem</i>
      <span className="nav__text">Amplop</span>
    </a>
  </nav>

        </>
    )
}

export default MenuBottom