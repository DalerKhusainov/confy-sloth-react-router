import React from "react";
import { NavLink } from "react-router-dom";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";

export const StyledNavbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__icon-text-field">
          <ChairOutlinedIcon />
          <p className="navbar__title">Comfora</p>
        </div>
        <div className="navbar__links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            About
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Products
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Login
          </NavLink>
        </div>
      </nav>
    </>
  );
};
