import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <h1 className="footer-h1">Tortuga</h1>
      </Link>
      <div className="footer-content">
        <h4 className="footer-h4">Created by :</h4>
        <div>
          <a
            className="footer-anchor"
            href="https://github.com/DamionStewart0"
            target="blank"
          >
            &nbsp; Damion Stewart
          </a>
        </div>
      </div>
    </div>
  );
};
