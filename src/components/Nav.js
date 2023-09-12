import React from "react";
import "./Nav.scss";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  return (
    <div className="nav  nav--black">
      <button className="nav__burger">
        {" "}
        <MenuIcon />
      </button>
      <img src="./images/logo.png" className="nav__logo" alt="Netflix" />
      <nav className="nav__links">
        <a href="/" className="nav__link">
          Accueil
        </a>
        <a href="/" className="nav__link">
          Séries
        </a>
        <a href="/" className="nav__link">
          Films
        </a>
      </nav>
      <div className="nav__actions">
        <a href="/" className="nav__action">
          search
        </a>
        <a href="/" className="nav__action">
          direct
        </a>
        <a href="/" className="nav__action">
          gift
        </a>
        <a href="/" className="nav__action">
          notif
        </a>
        <a href="/" className="nav__action">
          <img
            src="./images/Netflix-avatar.png"
            className="nav__avatar"
            alt="image_avatar"
          />
        </a>
      </div>
    </div>
  );
};

export default Nav;
