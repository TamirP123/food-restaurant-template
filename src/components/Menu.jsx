import React from "react";
import "../styles/Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  const featuredItems = [
    {
      name: "The South Philly Special",
      description:
        "Our signature pizza with Italian sausage, peppers, and onions",
      price: "From $16.99",
      tag: "House Favorite",
    },
    {
      name: "Nonna's Margherita",
      description: "Fresh mozzarella, basil, olive oil, and our homemade sauce",
      price: "From $14.99",
      tag: "Traditional",
    },
    {
      name: "Classic Cheesesteak",
      description: "Authentic Philly-style with your choice of cheese",
      price: "$11.99",
      tag: "Local Classic",
    },
    {
      name: "Homestyle Wings",
      description: "Crispy wings tossed in our secret family recipe sauce",
      price: "From $8.99",
      tag: "Family Recipe",
    },
    {
      name: "Meat Lovers",
      description:
        "Loaded with pepperoni, sausage, bacon, ground beef, and ham",
      price: "From $17.99",
      tag: "Customer Favorite",
    },
    {
      name: "Italian Hoagie",
      description:
        "Ham, salami, pepperoni, provolone, lettuce, tomato, onion, oil & vinegar",
      price: "$10.99",
      tag: "Classic Sub",
    },
  ];

  return (
    <section className="menu-preview">
      <div className="menu-header">
        <h2>Our Specialties</h2>
        <p className="menu-subtitle">
          Family recipes passed down through generations
        </p>
      </div>
      <div className="featured-items">
        {featuredItems.map((item, index) => (
          <div key={index} className="featured-item">
            <div className="item-tag">{item.tag}</div>
            <div className="item-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="menu-footer">
        <Link to="/menu" className="view-full-menu">
          View Our Complete Menu
        </Link>
        <p className="menu-note">
          All our pizzas are hand-tossed and cooked in our wood-fired oven
        </p>
      </div>
    </section>
  );
};

export default Menu;
