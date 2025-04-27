import React from "react";
import "../styles/Hero.css";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-background"></div>
      <div className="overlay-pattern"></div>
      <Navbar isHomePage={true} />
      <div className="hero-content">
        <div className="hero-badge">Est. 1985</div>
        <h1 className="hero-title">
          South Philly's <span className="highlight">Finest</span> Pizza
        </h1>
        <p className="hero-subtitle">
          Family owned & operated for over 35 years
        </p>
        <div className="hero-features">
          <span>Hand-Tossed Daily</span>
          <span>Wood-Fired Oven</span>
          <span>Fresh Ingredients</span>
        </div>
        <div className="hero-cta">
          <button className="btn btn-primary">Order Online</button>
          <button className="btn btn-outline">View Our Menu</button>
        </div>
        <div className="hero-awards">
          <div className="award">
            <span>⭐</span>
            <p>
              Voted Best Pizza
              <br />
              2023
            </p>
          </div>
          <div className="award">
            <span>🏆</span>
            <p>
              Local Favorite
              <br />
              Since 1985
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
