import React from "react";
import { Link } from "react-router-dom";

export const Layout = (props) => {
  const { currentUser, handleLogout } = props;
  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1>Tortuga</h1>
        </Link>
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <hr />
        {currentUser && (
          <>
            <Link to="/review">Review</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </header>
      {props.children}
    </div>
  );
};
