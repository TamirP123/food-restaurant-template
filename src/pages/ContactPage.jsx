import React from "react";
import "../styles/ContactPage.css";
import Navbar from "../components/Navbar";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaParking,
  FaWheelchair,
} from "react-icons/fa";

function ContactPage() {
  return (
    <>
      <Navbar isHomePage={false} />
      <div className="contact-page">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <div className="info-card primary-card">
              <h2>Order Now</h2>
              <div className="phone-number">
                <FaPhone className="icon" />
                <a href="tel:+12151234567">(215) 123-4567</a>
              </div>
              <p className="delivery-info">
                Free delivery within 3 miles on orders over $25
              </p>
              <button className="order-btn">Order Online</button>
            </div>

            <div className="info-card">
              <h3>Visit Us</h3>
              <div className="location-info">
                <FaMapMarkerAlt className="icon" />
                <div>
                  <p>1234 South Street</p>
                  <p>Philadelphia, PA 19147</p>
                </div>
              </div>
              <div className="amenities">
                <div className="amenity">
                  <FaParking className="icon" />
                  <span>Free Parking Available</span>
                </div>
                <div className="amenity">
                  <FaWheelchair className="icon" />
                  <span>Wheelchair Accessible</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3>Hours of Operation</h3>
              <div className="hours-info">
                <FaClock className="icon" />
                <div className="hours-grid">
                  <div className="day-hours">
                    <span className="day">Monday - Thursday</span>
                    <span className="hours">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="day-hours">
                    <span className="day">Friday - Saturday</span>
                    <span className="hours">11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="day-hours">
                    <span className="day">Sunday</span>
                    <span className="hours">12:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-card">
              <h3>Send Us a Message</h3>
              <form
                className="contact-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" required>
                    <option value="">Select a subject</option>
                    <option value="catering">Catering Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h3>Find Us</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24489.82887047435!2d-75.15853!3d39.94321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU2JzM1LjYiTiA3NcKwMDknMzAuNyJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
