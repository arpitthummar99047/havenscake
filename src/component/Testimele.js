import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import testimal1 from "./img/testimonial-1.jpg";
import testimal2 from "./img/testimonial-2.jpg";
import testimal3 from "./img/testimonial-3.jpg";
import testimal4 from "./img/testimonial-4.jpg";
import { Link } from "react-router-dom";

const Testimonial = () => {
  const testimonialData = [
    {
      name: "Client Name 1",
      profession: "Profession 1",
      comment: "Testimonial 1 - Dolor et eos labore, stet justo sed est sed.",
      image: testimal1,
    },
    {
      name: "Client Name 2",
      profession: "Profession 2",
      comment:
        "Testimonial 2 - Diam sed sed dolor stet amet eirmod eos labore diam.",
      image: testimal2,
    },
    {
      name: "Client Name 3",
      profession: "Profession 3",
      comment: "Testimonial 3 - Dolor et eos labore, stet justo sed est sed.",
      image: testimal3,
    },
    {
      name: "Client Name 4",
      profession: "Profession 4",
      comment:
        "Testimonial 4 - Diam sed sed dolor stet amet eirmod eos labore diam.",
      image: testimal4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    className: "testimonial-carousel",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const isTestimonialEnabled = true;

  return (
    <>
      {/* <!-- Page Header Start --> */}
      {isTestimonialEnabled && (
        <div className="container-fluid bg-dark bg-img p-5 mb-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 text-uppercase text-white">
                Testimonial
              </h1>
              <Link to="/">Home</Link>
              <i className="far fa-square text-primary px-2"></i>
              <Link to="/testimonial">Testimonial</Link>
            </div>
          </div>
        </div>
      )}
      {/* <!-- Page Header End --> */}

      <div className="container-fluid py-5">
        <div className="container">
          <Slider {...settings}>
            {testimonialData.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-item bg-dark text-white border-inner p-4"
              >
                <div className="d-flex align-items-center mb-4">
                  <img
                    className="img-fluid flex-shrink-0 imageex"
                    src={testimonial.image}
                    alt={`Client ${index + 1}`}
                  />
                  <div className="ps-3">
                    <h4 className="text-primary text-uppercase mb-1">
                      {testimonial.name}
                    </h4>
                    <span>{testimonial.profession}</span>
                  </div>
                </div>
                <p className="mb-0">{testimonial.comment}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
