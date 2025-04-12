import React from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaYelp,
} from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <h3 className="section-title">Pizza Perfection</h3>
            <p className="section-text">
              Crafting the perfect pizza with premium ingredients and authentic
              Italian recipes since 1995.
            </p>
            <div className="social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Yelp"
              >
                <FaYelp />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="section-title">Contact Us</h3>
            <div className="contact-info">
              <div className="info-item">
                <FaPhone />
                <span>(555) 123-4567</span>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt />
                <span>
                  123 Pizza Street
                  <br />
                  New York, NY 10001
                </span>
              </div>
              <div className="info-item">
                <FaClock />
                <span>Mon-Sun: 11:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="section-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#menu">Our Menu</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#catering">Catering</a>
              </li>
              <li>
                <a href="#locations">Locations</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="section-title">Newsletter</h3>
            <p className="section-text">
              Subscribe for special offers and updates!
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Pizza Perfection. All rights reserved.
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
