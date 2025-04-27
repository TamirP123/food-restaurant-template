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
    },
    {
      name: "Classic Cheesesteak",
      description: "Authentic Philly-style with your choice of cheese",
      price: "$11.99",
    },
    {
      name: "Buffalo Wings",
      description: "Crispy wings in your choice of sauce",
      price: "From $8.99",
    },
  ];

  return (
    <section className="menu-preview">
      <h2>Popular Items</h2>
      <div className="featured-items">
        {featuredItems.map((item, index) => (
          <div key={index} className="featured-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>
      <Link to="/menu" className="view-full-menu">
        View Full Menu
      </Link>
    </section>
  );
};

export default Menu;
