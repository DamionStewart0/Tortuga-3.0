import React from "react";
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <>
        <h1 className="footer-h1">Tortuga</h1>
      </>
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
