import React from "react";
// import { useState, useState } from "react";
// import axios from "axios";
import "./Row.scss";

function Row({ title, fetchUrl }) {
  return (
    <div className="row">
      <h2 className="row__title">
        <div className="row__images">
          <img src="/" className="row__image" alt="" />
        </div>
      </h2>
    </div>
  );
}

export default Row;
