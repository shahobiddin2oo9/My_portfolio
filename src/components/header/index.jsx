import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="hdr">
      <div className="container">
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/debts">Debts</NavLink>
          <NavLink to="/transaction">Transcation</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
