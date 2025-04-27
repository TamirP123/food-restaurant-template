import React from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaYelp,
  FaArrowRight,
} from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-pattern"></div>
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section about-section">
            <h3 className="section-title">Tamir's Pizza</h3>
            <p className="section-text">
              Serving authentic Italian pizza in South Philly since 1985. Made
              with love, tradition, and the finest ingredients.
            </p>
            <div className="social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Like us on Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Review us on Yelp"
              >
                <FaYelp />
              </a>
            </div>
          </div>
          <div className="footer-section contact-section">
            <h3 className="section-title">Visit Us</h3>
            <div className="contact-info">
              <div className="info-item">
                <FaPhone className="info-icon" />
                <div>
                  <span>(215) 123-4567</span>
                </div>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <span>
                    1234 South Street
                    <br />
                    Philadelphia, PA 19147
                  </span>
                </div>
              </div>
              <div className="info-item">
                <FaClock className="info-icon" />
                <div>
                  <span>
                    Mon-Thu: 11AM - 10PM
                    <br />
                    Fri-Sun: 11AM - 11PM
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-section links-section">
            <h3 className="section-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/menu">Our Menu</a>
              </li>
              <li>
                <a href="/about">Our Story</a>
              </li>
              <li>
                <a href="/catering">Catering</a>
              </li>
              <li>
                <a href="/specials">Weekly Specials</a>
              </li>
              <li>
                <a href="/order">Order Online</a>
              </li>
            </ul>
          </div>
          <div className="footer-section newsletter-section">
            <h3 className="section-title">Stay Updated</h3>
            <p className="section-text">Join our family for exclusive deals!</p>
            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="subscribe-btn"
                  aria-label="Subscribe"
                >
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Tamir's Pizza. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
