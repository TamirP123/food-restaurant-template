import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar({ isHomePage }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${
        isHomePage ? "home-nav" : ""
      }`}
    >
      <div className="navbar-logo">
        <Link to="/">
          <h1>Tamir's Restaurant</h1>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/menu">Menu</Link>
        <a href="#locations">Locations</a>
        <a href="#contact">Contact</a>
        <button className="btn btn-primary">Order Now</button>
      </div>
    </nav>
  );
}
