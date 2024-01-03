import React from "react";
import { NavLink } from "react-router-dom";
import logoimg from "./img/cartimg.com.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      {/* <!-- Topbar Start --> */}
      <div className="container-fluid px-0 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-4 text-center bg-secondary py-3">
            <div className="d-inline-flex align-items-center justify-content-center">
              <i className="bi bi-envelope fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Email Us</h6>
                <span>heaven's cake@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center bg-primary border-inner py-3">
            <div className="d-inline-flex align-items-center justify-content-center">
              <a href="index.html" className="navbar-brand">
                <h1 className="m-0 text-uppercase text-white">
                  <i className="fa fa-birthday-cake fs-1 text-dark me-3"></i>
                  heaven's cake
                </h1>
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center bg-secondary py-3">
            <div className="d-inline-flex align-items-center justify-content-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Call Us</h6>
                <span>+91 345 6789</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <a href="index.html" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 text-uppercase text-white">
            <i className="fa fa-birthday-cake fs-1 text-primary me-3"></i>
            heaven's cake
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto mx-lg-auto py-0">
            <NavLink to="/" className="nav-item nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link">
              About Us
            </NavLink>
            <NavLink to="/product" className="nav-item nav-link">
              Menu & Pricing
            </NavLink>
            <NavLink to="/teme" className="nav-item nav-link">
              Master Chefs
            </NavLink>
            <NavLink to="/service" className="nav-item nav-link">
              Our Service
            </NavLink>
            <NavLink to="/testimonial" className="nav-item nav-link">
              Testimonial
            </NavLink>
            <NavLink to="/contect" className="nav-item nav-link">
              Contact Us
            </NavLink>
          </div>
        </div>

        <NavLink to="/gotocart" className="cartLogo">
          <img src={logoimg} alt={logoimg} />
        </NavLink>

        <NavLink to="/login" className="login-link">
          login
        </NavLink>
      </nav>

      {/* <!-- Navbar End --> */}
    </>
  );
}
