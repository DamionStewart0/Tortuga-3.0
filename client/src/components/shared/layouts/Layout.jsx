import React from "react";
import {Footer} from "../../footer/Footer";
import Nav from '../nav/Nav';
import "./Layout.css";

export const Layout = (props) => {
  const { currentUser, handleLogout } = props;
  return (
      <div className="layout-children">
      <div className="layout-content">
        <Nav user={props.user} />
        {/* screens go below */}
      {props.children}
      </div>
      <Footer />
    </div>
  );
};
