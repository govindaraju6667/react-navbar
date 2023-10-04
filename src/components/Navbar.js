import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar">
      <Link to="/Home">Home</Link>
      <Link to="/Blogs">Blogs</Link>
      <Link to="/Contact">Contact</Link>
      {/* <Link to="#">Nopage</Link> */}
      <Link to="/About">About</Link>
      <Link to="/Login">Login</Link>
    </div>
  );
};

export default Navbar;
