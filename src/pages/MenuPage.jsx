import React from "react";
import "../styles/MenuPage.css";
import Navbar from "../components/Navbar";

function MenuPage() {
  return (
    <>
      <Navbar isHomePage={false} />
      <div className="menu-page">
        <div className="menu-header">
          <h1>Our Family Recipes</h1>
          <p>Serving South Philly's Best Pizza Since 1985</p>
        </div>

        <div className="menu-notice">
          <p>
            All pizzas available in Small (12"), Medium (14"), or Large (16")
          </p>
          <p>Free delivery on orders over $25 within 3 miles</p>
        </div>

        <div className="menu-content">
          <section className="menu-category">
            <h2>Specialty Pizzas</h2>
            <div className="menu-items">
              <div className="menu-item">
                <div className="item-content">
                  <div className="item-name-price">
                    <h3>The South Philly Special</h3>
                    <div className="size-price">
                      <div>
                        S <span>$16.99</span>
                      </div>
                      <div>
                        M <span>$19.99</span>
                      </div>
                      <div>
                        L <span>$22.99</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Italian sausage, bell peppers, onions, mushrooms, extra
                    cheese
                  </p>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-content">
                  <div className="item-name-price">
                    <h3>Margherita</h3>
                    <div className="size-price">
                      <div>
                        S <span>$14.99</span>
                      </div>
                      <div>
                        M <span>$17.99</span>
                      </div>
                      <div>
                        L <span>$20.99</span>
                      </div>
                    </div>
                  </div>
                  <p>Fresh mozzarella, basil, olive oil, fresh tomatoes</p>
                </div>
              </div>
              <div className="menu-item">
                <div className="item-content">
                  <div className="item-name-price">
                    <h3>Meat Lovers</h3>
                    <div className="size-price">
                      <div>
                        S <span>$17.99</span>
                      </div>
                      <div>
                        M <span>$20.99</span>
                      </div>
                      <div>
                        L <span>$23.99</span>
                      </div>
                    </div>
                  </div>
                  <p>Pepperoni, sausage, bacon, ground beef, ham</p>
                </div>
              </div>
            </div>
          </section>

          <section className="menu-category">
            <h2>Build Your Own Pizza</h2>
            <div className="build-your-own">
              <div className="base-prices">
                <h4>Base Prices</h4>
                <div className="size-price-grid">
                  <div className="size-price-item">
                    <span className="size">Small (12")</span>
                    <span className="price">$12.99</span>
                  </div>
                  <div className="size-price-item">
                    <span className="size">Medium (14")</span>
                    <span className="price">$14.99</span>
                  </div>
                  <div className="size-price-item">
                    <span className="size">Large (16")</span>
                    <span className="price">$16.99</span>
                  </div>
                </div>
                <p className="includes-text">
                  Includes our signature sauce and fresh mozzarella
                </p>
              </div>

              <div className="toppings-section">
                <h4>
                  Premium Toppings <span>$1.50 each</span>
                </h4>
                <div className="toppings-grid">
                  <div className="topping-category">
                    <h5>Meats</h5>
                    <ul>
                      <li>Pepperoni</li>
                      <li>Italian Sausage</li>
                      <li>Bacon</li>
                      <li>Ham</li>
                      <li>Ground Beef</li>
                    </ul>
                  </div>
                  <div className="topping-category">
                    <h5>Veggies</h5>
                    <ul>
                      <li>Mushrooms</li>
                      <li>Bell Peppers</li>
                      <li>Onions</li>
                      <li>Black Olives</li>
                      <li>Jalapeños</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="menu-category">
            <h2>Hoagies & Cheesesteaks</h2>
            <div className="menu-items">
              <div className="menu-item">
                <div className="item-header">
                  <h3>Classic Cheesesteak</h3>
                  <span className="price">$11.99</span>
                </div>
                <p>Choice of cheese: American, Provolone, or Whiz</p>
              </div>
              <div className="menu-item">
                <div className="item-header">
                  <h3>Italian Hoagie</h3>
                  <span className="price">$10.99</span>
                </div>
                <p>
                  Ham, salami, pepperoni, provolone, lettuce, tomato, onion, oil
                  & vinegar
                </p>
              </div>
            </div>
          </section>

          <section className="menu-category">
            <h2>Wings & Sides</h2>
            <div className="menu-items">
              <div className="menu-item">
                <div className="item-header">
                  <h3>Wings</h3>
                  <div className="prices">
                    <span>6pc: $8.99</span>
                    <span>12pc: $15.99</span>
                    <span>24pc: $28.99</span>
                  </div>
                </div>
                <p>Sauces: Mild, Hot, BBQ, Garlic Parmesan, Honey BBQ</p>
              </div>
              <div className="menu-item">
                <div className="item-header">
                  <h3>Garlic Knots</h3>
                  <span className="price">6pc: $4.99</span>
                </div>
                <p>Brushed with garlic butter and herbs</p>
              </div>
            </div>
          </section>

          <section className="menu-category">
            <h2>Beverages</h2>
            <div className="menu-items">
              <div className="menu-item">
                <div className="item-header">
                  <h3>2-Liter Sodas</h3>
                  <span className="price">$3.99</span>
                </div>
                <p>Coke, Diet Coke, Sprite, Root Beer</p>
              </div>
              <div className="menu-item">
                <div className="item-header">
                  <h3>20oz Bottles</h3>
                  <span className="price">$2.49</span>
                </div>
                <p>All Coca-Cola products</p>
              </div>
            </div>
          </section>
        </div>

        <div className="menu-footer">
          <p>🌶️ Spicy items marked with pepper</p>
          <p>
            ⚠️ Consuming raw or undercooked meats may increase your risk of
            foodborne illness
          </p>
          <p>🥜 Please inform us of any food allergies</p>
        </div>
      </div>
    </>
  );
}

export default MenuPage;
