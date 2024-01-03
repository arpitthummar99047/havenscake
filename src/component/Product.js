// Product.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./product.css";
import axios from "axios";

const Cake = ({ cake, onAddToCart }) => (
  <div className="main col-md-4">
    <ul className="cards">
      <li className="cards_item">
        <div className="card">
          <div className="card_image">
            <a href={cake.imageUrl}>
              {" "}
              <img src={cake.imageUrl} alt={cake.title} />
            </a>

            <span className="card_price">
              <span>{cake.price}</span>
            </span>

            <span className="add_to">
              <button onClick={() => onAddToCart(cake)}>Add to Cart</button>
            </span>
          </div>
          <div className="card_content">
            <h2 className="card_title">{cake.title}</h2>
            <div className="card_text">
              <p>{cake.description}</p>
              <hr />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

const Product = () => {
  const [cakeData, setCakeData] = useState([]);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cakeData");
        setCakeData(response.data[0]);

        const firstCategory = Object.keys(response.data[0])[0];
        setActiveCategory(firstCategory);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  const yourAddToCartFunction = () => {
    console.log("cart call");
  };

  return (
    <>
      <div className="container-fluid bg-dark bg-img p-5 mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-uppercase text-white">
              Menu & Pricing
            </h1>
            <Link to="/">Home</Link>
            <i className="far fa-square text-primary px-2"></i>
            <Link to="/about">Menu</Link>
          </div>
        </div>
      </div>

      <div className="container-fluid about py-5">
        <div className="container">
          <div
            className="section-title position-relative text-center mx-auto mb-5 pb-3"
            style={{ maxWidth: "600px" }}
          >
            <h2 className="text-primary font-secondary">Menu & Pricing</h2>
            <h1 className="display-4 text-uppercase">Explore Our Cakes</h1>
          </div>
          <div id="products" className="tab-class text-center">
            <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase border-inner p-4 mb-5">
              {Object.keys(cakeData).map((category) => (
                <li key={category} className="nav-item">
                  <Link
                    to={`#tab-${category.toLowerCase()}`}
                    className={`nav-link text-white ${
                      activeCategory === category ? "active" : ""
                    }`}
                    data-bs-toggle="pill"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="tab-content">
            {Object.keys(cakeData).map((category) => (
              <div
                key={category}
                id={`tab-${category.toLowerCase()}`}
                className={`tab-pane fade show ${
                  activeCategory === category ? "active" : ""
                }`}
              >
                {cakeData[category] ? (
                  <div className="row">
                    {cakeData[category].map((cake, index) => (
                      <Cake
                        key={cake.id || index}
                        cake={cake}
                        onAddToCart={yourAddToCartFunction}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="alert alert-danger" role="alert">
                    Error loading cakes in the {category} category. Please try
                    again later.
                  </div>
                )}
              </div>
            ))}
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
