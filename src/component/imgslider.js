import React, { useEffect, useState } from "react";
import "./product.css";
import axios from "axios";

const ImgSlider = () => {
  const [cakeData, setCakeData] = useState([]);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON server
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cakeData");
        setCakeData(response.data[0]);

        // Set the first category as active by default
        const firstCategory = Object.keys(response.data[0])[0];
        setActiveCategory(firstCategory);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {cakeData && (
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          {/* Carousel Indicators */}
          {cakeData[activeCategory] && (
            <div className="carousel-indicators">
              {cakeData[activeCategory].map((cake, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
          )}

          {/* Carousel Items */}
          <div className="carousel-inner">
            {cakeData[activeCategory] &&
              cakeData[activeCategory].map((cake, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={cake.imageUrl}
                    className="d-block w-100"
                    alt="Not found"
                  />
                </div>
              ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ImgSlider;
