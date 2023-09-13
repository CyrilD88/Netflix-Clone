import React, { useState } from "react";
import "./Nav.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Nav = () => {
  // constante pour remplissage en noir de la navbar
  const [navBlack, setNavBlack] = useState(false);

  // affichage du menu
  const [toggleMenu, setToggleMenu] = useState(false);

  // remplissage en noir de la navbar
  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };

  const handleclick = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });

  return (
    <div
      className={`nav ${
        navBlack || toggleMenu ? "nav--black" : "nav--transparent"
      } ${toggleMenu && "show"}`}
    >
      <button className="nav__burger" onClick={handleclick}>
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
          <SearchIcon />
        </a>
        <a href="/" className="nav__action">
          Direct
        </a>
        <a href="/" className="nav__action">
          <CardGiftcardIcon />
        </a>
        <a href="/" className="nav__action">
          <NotificationsIcon />
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
