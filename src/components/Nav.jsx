import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const NavStyle = {
    color: "#888",
    textDecoration: "none"
  };

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  }

  return (
    <div className="footer">
      <nav className="footerNav">
        <Link style={NavStyle} to="/" onClick={refreshPage}>
          <p className="navLinks">Home</p>
        </Link>
        <Link style={NavStyle} to="/terms">
          <p className="navLinks">Terms of Service</p>
        </Link>
        <Link style={NavStyle} to="/faqs">
          <p className="navLinks">FAQs</p>
        </Link>
        <Link style={NavStyle} to="/about">
          <p className="navLinks">About</p>
        </Link>
      </nav>
      <p>
        <em>The Book Of Answers</em> was created by Carol Bolt, this site
        provide you the easy way to get your answers online.
      </p>
      <p>DISCLAIMER: This website is just a clone of <a href="https://www.myanswersbook.com/">Book of Answers Online</a> and is only intended for personal use.  
      All credit goes to the rightful owner of the orginial website and the author, Ms. Carol Bolt.</p>
    </div>
  );
}

export default Nav;
