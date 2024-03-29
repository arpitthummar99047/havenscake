import React from "react";
import { Link } from "react-router-dom";
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./img/about.jpg";
import "./img/bg.jpg";
import "./img/service.jpg";

export default function Service() {
  return (
    <>
      {/* <!-- Page Header Start --> */}
      <div className="container-fluid bg-dark bg-img p-5 mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-uppercase text-white">Services</h1>
            <Link to="/">Home</Link>
            <i className="far fa-square text-primary px-2"></i>
            <Link to="/service">Services</Link>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      <div
        className="container-fluid service position-relative px-5"
        style={{ marginTop: "90px" }}
      >
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <h4 className="text-uppercase mb-3">Birthday Cake</h4>
                <p>
                  Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam
                  stet sit justo amet tempor amet kasd lorem dolor ipsum
                </p>
                <button className="custom-button animated-border">
                  Read More <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <h4 className="text-uppercase mb-3">Wedding Cake</h4>
                <p>
                  Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam
                  stet sit justo amet tempor amet kasd lorem dolor ipsum
                </p>
                <button className="custom-button animated-border">
                  Read More <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <h4 className="text-uppercase mb-3">Custom Cake</h4>
                <p>
                  Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam
                  stet sit justo amet tempor amet kasd lorem dolor ipsum
                </p>
                <button className="custom-button animated-border">
                  Read More <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-12 col-md-6 text-center">
              <h1 className="text-uppercase text-light mb-4">
                30% Discount For This Summer
              </h1>
              <a href="/" className="btn btn-primary border-inner py-3 px-5">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
