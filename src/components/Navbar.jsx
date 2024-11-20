import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" aria-label="Home">
        <div>
          <img
            src="https://www.github.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
          />
          <h3>GitHub</h3>
        </div>
      </Link>
      <div>
        <Link to="/create" aria-label="Create a Repository">
          <p>Create a Repository</p>
        </Link>
        <Link to="/profile" aria-label="Profile">
          <p>Profile</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
