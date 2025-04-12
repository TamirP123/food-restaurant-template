import React, { useState, useEffect } from "react";
import "../styles/Hero.css";

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero">
      <div className="hero-background"></div>

      /* Navbar */
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-logo">
          <h1>Pizza Perfection</h1>
        </div>
        <div className="navbar-links">
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#locations">Locations</a>
          <a href="#contact">Contact</a>
          <button className="btn btn-primary">Order Now</button>
        </div>
      </nav>

      /* Hero */
      <div className="hero-content">
        <h1 className="hero-title">
          Cooked to <span className="highlight">Perfection</span>
        </h1>
        <p className="hero-subtitle">
          Crafted with <span className="typing-text">passion</span>
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary">Order Online</button>
          <button className="btn btn-outline">View Menu</button>
        </div>
      </div>
    </div>
  );
}
