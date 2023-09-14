import React from "react";
import { useState, useEffect } from "react";
import "./Banner.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import requests from "../config/Requests";
import axios from "axios";

const Banner = () => {
  return (
    <header className="banner">
      <div className="banner__content">
        <h1 className="banner__title">Titre</h1>
        <p className="banner__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          aut suscipit dolorem architecto fugit illo quidem eius quasi, mollitia
          sed, in nisi modi accusamus? Rem sit enim officia repudiandae unde?
        </p>
        <div className="banner__buttons">
          <button className="banner__button banner__button--play">
            <PlayArrowIcon /> Lecture
          </button>
          <button className="banner__button">
            {" "}
            <InfoIcon />
            Plus d'infos
          </button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
