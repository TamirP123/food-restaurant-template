import React from "react";
import "../styles/Hero.css";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-background"></div>
      <Navbar isHomePage={true} />
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
