import React, { useEffect } from "react";
import "../styles/Menu.css";
import AOS from "aos";
import "aos/dist/aos.css";

import pizzaImg from "../assets/logo.svg";
import wingsImg from "../assets/logo.svg";
import cheesesteakImg from "../assets/logo.svg";
import friesImg from "../assets/logo.svg";

const Menu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const menuItems = {
    pizzas: [
      {
        name: "Classic Pepperoni",
        description:
          "Hand-tossed crust topped with marinara, mozzarella, and crispy pepperoni",
        price: "$14.99",
        image: pizzaImg,
      },
      {
        name: "Supreme Pizza",
        description:
          "Loaded with pepperoni, sausage, bell peppers, onions, and mushrooms",
        price: "$16.99",
        image: pizzaImg,
      },
    ],
    specialties: [
      {
        name: "Philly Cheesesteak",
        description:
          "Thinly sliced beef with melted cheese, onions, and peppers on a hoagie roll",
        price: "$12.99",
        image: cheesesteakImg,
      },
      {
        name: "Buffalo Wings",
        description: "Crispy wings tossed in your choice of sauce",
        price: "$10.99",
        image: wingsImg,
      },
    ],
    sides: [
      {
        name: "Loaded Fries",
        description: "Crispy fries topped with cheese, bacon, and green onions",
        price: "$6.99",
        image: friesImg,
      },
      {
        name: "Garlic Knots",
        description: "Fresh-baked knots brushed with garlic butter and herbs",
        price: "$5.99",
        image: friesImg,
      },
    ],
    drinks: [
      {
        name: "Fountain Drinks",
        description: "Coca-Cola products",
        price: "$2.99",
      },
      {
        name: "Craft Beer",
        description: "Ask about our rotating selection",
        price: "$5.99",
      },
    ],
    sauces: [
      {
        name: "Dipping Sauces",
        description: "Ranch, Blue Cheese, Garlic Parmesan, Buffalo, BBQ",
        price: "$0.75",
      },
    ],
  };

  const MenuSection = ({ title, items }) => (
    <div className="menu-section" data-aos="fade-up">
      <h2 href="menu">{title}</h2>
      <div className="menu-grid">
        {items.map((item, index) => (
          <div
            key={index}
            className="menu-item"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {item.image && (
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} />
              </div>
            )}
            <div className="menu-item-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="menu-container">
      <h1 data-aos="fade-down">Our Menu</h1>
      <MenuSection title="Pizza" items={menuItems.pizzas} />
      <MenuSection title="Specialties" items={menuItems.specialties} />
      <MenuSection title="Sides" items={menuItems.sides} />
      <MenuSection title="Drinks" items={menuItems.drinks} />
      <MenuSection title="Sauces" items={menuItems.sauces} />
    </section>
  );
};

export default Menu;
