import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Product from "./component/Product";
import About from "./component/About";
import Teme from "./component/Teme";
import Service from "./component/Service";
import Contect from "./component/Contect";
import Testimonial from "./component/Testimele";
import Registration from "./component/Ragistration";
import Login from "./component/Login";
import Main from "./component/Main";
import SimpleSlider from "./component/SimpleSlider";
import ShoppingCart from "./component/cartpage";

function App() {
  console.log("Routes component rendered");

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/teme" element={<Teme />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/contect" element={<Contect />} />
          <Route
            exact
            path="/testimonial"
            element={<Testimonial key={Testimonial} />}
          />
          <Route
            exact
            path="/registration"
            element={<Registration key={Registration} />}
          />
          <Route exact path="/login" element={<Login key={Login} />} />
          <Route
            exact
            path="/login"
            element={<SimpleSlider key={SimpleSlider} />}
          />
          <Route
            exact
            path="/gotocart"
            element={<ShoppingCart key={ShoppingCart} />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
