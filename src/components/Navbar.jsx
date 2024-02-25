import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ profileActive, setProfileActive }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        EventMaster.Pro
      </Link>
      {/* {!localStorage.getItem("user") ? (
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
      ) : (
        <p
          style={{ cursor: "pointer" }}
          onClick={() => setProfileActive(!profileActive)}
          className="your-profile"
        >
          Your Profile
        </p>
      )} */}
    </nav>
  );
};

export default Navbar;
