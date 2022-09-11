import React from 'react'
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/fantasy"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Fantasy
      </NavLink>
      <NavLink
        to="/kids"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Kids
      </NavLink>
      <NavLink
        to="/drama"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Drama
      </NavLink>
      <NavLink
        to="/comedy"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Comedy
      </NavLink>
      <NavLink
        to="/reviews"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Reviews
      </NavLink>
    </div>
  );
}

export default NavBar