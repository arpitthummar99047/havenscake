import React, { useState, useEffect, useRef } from "react";
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./Testimonial.css";
import Testimonial from "./Testimele";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgSlider from "./imgslider";
// import $ from "jquery";

// product slider home page
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// images
import aboutImage from "./img/about.jpg";
import team1 from "./img/team-1.jpg";
import team2 from "./img/team-2.jpg";
import team3 from "./img/team-3.jpg";
import testimal1 from "./img/testimonial-1.jpg";
import testimal2 from "./img/testimonial-2.jpg";
import testimal3 from "./img/testimonial-3.jpg";
import testimal4 from "./img/testimonial-4.jpg";

// coustom cake

import ccakeImage1 from "./img/custom cake/cake1 c.jpg";
import ccakeImage2 from "./img/custom cake/cake2 c.jpg";
import ccakeImage3 from "./img/custom cake/cake3 c.jpg";
import ccakeImage4 from "./img/custom cake/cake4 c.jpg";
import ccakeImage5 from "./img/custom cake/cake5 c.jpg";
import ccakeImage6 from "./img/custom cake/cake6 c.jpg";
import ccakeImage7 from "./img/custom cake/cake7 c.jpg";
import ccakeImage8 from "./img/custom cake/cake8 c.jpg";
import ccakeImage9 from "./img/custom cake/cake9 c.jpg";
import { Link } from "react-router-dom";

function Main() {
  // cake video

  const [videoSrc, setVideoSrc] = useState(null);

  const handlePlayButtonClick = (src) => {
    setVideoSrc(src);
  };

  const handleModalClose = () => {
    setVideoSrc(null);
  };

  // fact start

  const experienceRef = useRef(null);
  const cakeSpecialistRef = useRef(null);
  const completeProjectRef = useRef(null);
  const happyClientsRef = useRef(null);

  useEffect(() => {
    const animateCounter = (ref, start, end, duration) => {
      const range = end - start;
      const increment = (range / duration) * 10;
      let current = start;

      const updateCounter = () => {
        current += increment;
        if (current < end) {
          if (ref.current) {
            ref.current.textContent = Math.round(current);
          }
          requestAnimationFrame(updateCounter);
        } else {
          if (ref.current) {
            ref.current.textContent = end;
          }
        }
      };

      updateCounter();
    };

    animateCounter(experienceRef, 0, 40, 2000);
    animateCounter(cakeSpecialistRef, 0, 500, 2000);
    animateCounter(completeProjectRef, 0, 12345, 2000);
    animateCounter(happyClientsRef, 0, 12345, 2000);
  }, []);

  // testimonialData start

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

  const settingsT = {
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

  // img data

  const imgData = [
    {
      image: testimal1,
    },
    {
      image: testimal2,
    },
    {
      image: testimal3,
    },
    {
      image: testimal4,
    },
  ];

  const settingsC = {
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

  const gotobirth = () => {
    // window.location.href = "#birthday";
    const container = document.getElementById("products");
    container.scrollIntoView({ behavior: "smooth" });
  };

  const gotowedd = () => {
    // window.location.href = "#tab-1";
    const container = document.getElementById("products");
    container.scrollIntoView({ behavior: "smooth" });
  };

  const gotocustom = () => {
    // window.location.href = "#tab-2";
    const container = document.getElementById("products");
    container.scrollIntoView({ behavior: "smooth" });
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <>
      {/* <!-- Hero Start --> */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="font-secondary text-primary mb-4">Super Crispy</h1>
              <h1 className="display-1 text-uppercase text-white mb-4">
                heaven's cake
              </h1>
              <h1 className="text-uppercase text-white">
                The Best Cake In India
              </h1>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <a
                  href="/"
                  className="btn btn-primary border-inner py-3 px-5 me-5"
                >
                  Read More
                </a>
                <h5 className="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">
                  <button
                    type="button"
                    className="btn-play"
                    data-bs-toggle="modal"
                    data-src="https://www.youtube.com/embed/ZZNZnw6zf50"
                    data-bs-target="#videoModal"
                    onClick={() =>
                      handlePlayButtonClick(
                        "https://www.youtube.com/embed/ZZNZnw6zf50"
                      )
                    }
                  >
                    <span></span>
                  </button>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}
      {/* <!-- Video Modal Start --> */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onClose={handleModalClose}
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-body">
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="ratio ratio-16x9">
                {videoSrc && (
                  <iframe
                    className="embed-responsive-item"
                    src={videoSrc}
                    id="video"
                    allowFullScreen
                    title="uniqueTitle"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video Modal End --> */}
      {/* <!-- About Start --> */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div
            className="section-title position-relative text-center mx-auto mb-5 pb-3"
            style={{ maxWidth: "600px" }}
          >
            <h2 className="text-primary font-secondary">About Us</h2>
            <h1 className="display-4 text-uppercase">Welcome To CakeZone</h1>
          </div>
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={aboutImage}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 pb-5">
              <h4 className="mb-4">
                Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem
                sed stet labore lorem sit clita duo
              </h4>
              <p className="mb-5">
                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
                tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
                lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
                erat amet magna
              </p>
              <div className="row g-5">
                <div className="col-sm-6">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                    style={{ width: "90px", height: "90px" }}
                  >
                    <i className="fa fa-heartbeat fa-2x text-white"></i>
                  </div>
                  <h4 className="text-uppercase">100% Healthy</h4>
                  <p className="mb-0">
                    Labore justo vero ipsum sit clita erat lorem magna clita
                    nonumy dolor magna dolor vero
                  </p>
                </div>
                <div className="col-sm-6">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                    style={{ width: "90px", height: "90px" }}
                  >
                    <i className="fa fa-award fa-2x text-white"></i>
                  </div>
                  <h4 className="text-uppercase">Award Winning</h4>
                  <p className="mb-0">
                    Labore justo vero ipsum sit clita erat lorem magna clita
                    nonumy dolor magna dolor vero
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
      <div className="container-fluid bg-img py-5 mb-5">
        <div className="container py-5">
          <div className="row gx-5 gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-star text-white"></i>
                </div>
                <div className="ps-4">
                  <h6 className="text-primary text-uppercase">
                    Years of Experience
                  </h6>
                  <h1 className="display-5 text-white mb-0" ref={experienceRef}>
                    0
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-users text-white"></i>
                </div>
                <div className="ps-4">
                  <h6 className="text-primary text-uppercase">
                    Cake Specialist
                  </h6>
                  <h1
                    className="display-5 text-white mb-0"
                    ref={cakeSpecialistRef}
                  >
                    0
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-check text-white"></i>
                </div>
                <div className="ps-4">
                  <h6 className="text-primary text-uppercase">
                    Complete Project
                  </h6>
                  <h1
                    className="display-5 text-white mb-0"
                    ref={completeProjectRef}
                  >
                    0
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex">
                <div
                  className="bg-primary border-inner d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-mug-hot text-white"></i>
                </div>
                <div className="ps-4">
                  <h6 className="text-primary text-uppercase">Happy Clients</h6>
                  <h1
                    className="display-5 text-white mb-0"
                    ref={happyClientsRef}
                  >
                    0
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts End --> */}

      {/* <!-- Products Start --> */}
      <div className="container-fluid about py-5">
        <div className="container">
          <div
            className="section-title position-relative text-center mx-auto mb-5 pb-3"
            style={{ maxWidth: "600px" }}
          >
            <h2 className="text-primary font-secondary">Heaven's Cake</h2>
            <h1 className="display-4 text-uppercase">Explore Our Cakes</h1>
          </div>
          <div id="products" className="tab-class text-center">
            {/* slider content */}
            <ImgSlider />

            {/* slider content */}
          </div>
        </div>
      </div>
      {/* <!-- Products End --> */}
      {/* <!-- Service Start --> */}
      <div
        className="container-fluid service position-relative px-5 mt-5"
        style={{ marginBottom: "135px" }}
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
                <button
                  className="custom-button"
                  onClick={() => {
                    gotobirth();
                  }}
                >
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
                <button
                  className="custom-button"
                  onClick={() => {
                    gotowedd();
                  }}
                >
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
                <button
                  className="custom-button"
                  onClick={() => {
                    gotocustom();
                  }}
                >
                  Read More <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-12 col-md-6 text-center">
              <h1 className="text-uppercase text-light mb-4">
                30% Discount For This Summer
              </h1>
              <Link
                to="/product"
                className="btn btn-primary border-inner py-3 px-5"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service Start --> */}
      {/* <!-- Team Start --> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="section-title position-relative text-center mx-auto mb-5 pb-3"
            style={{ maxWidth: "600px" }}
          >
            <h2 className="text-primary font-secondary">Team Members</h2>
            <h1 className="display-4 text-uppercase">Our Master Chefs</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={team1} alt="" />
                  <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-start">
                      <a
                        className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="/"
                      >
                        <i className="fab fa-twitter fw-normal"></i>
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="/"
                      >
                        <i className="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="/"
                      >
                        <i className="fab fa-linkedin-in fw-normal"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-dark border-inner text-center p-4">
                  <h4 className="text-uppercase text-primary">Full Name</h4>
                  <p className="text-white m-0">Designation</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={team2} alt="" />
                  <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-start">
                      <a
                        className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="/"
                      >
                        <i className="fab fa-twitter fw-normal"></i>
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="/"
                      >
                        <i className="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="/"
                      >
                        <i className="fab fa-linkedin-in fw-normal"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-dark border-inner text-center p-4">
                  <h4 className="text-uppercase text-primary">Full Name</h4>
                  <p className="text-white m-0">Designation</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-item">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={team3} alt="" />
                  <div className="team-overlay w-100 h-100 position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-start">
                      <a
                        className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="/"
                      >
                        <i className="fab fa-twitter fw-normal"></i>
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="/"
                      >
                        <i className="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a
                        className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 mx-1"
                        href="/"
                      >
                        <i className="fab fa-linkedin-in fw-normal"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-dark border-inner text-center p-4">
                  <h4 className="text-uppercase text-primary">Full Name</h4>
                  <p className="text-white m-0">Designation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
      {/* <!-- Offer Start --> */}
      <div className="container-fluid bg-offer my-5 py-5">
        <div className="container py-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-7 text-center">
              <div
                className="section-title position-relative text-center mx-auto mb-4 pb-3"
                style={{ maxWidth: "600px" }}
              >
                <h2 className="text-primary font-secondary">
                  Special Kombo Pack
                </h2>
                <h1 className="display-4 text-uppercase text-white">
                  Super Crispy Cakes
                </h1>
              </div>
              <p className="text-white mb-4">
                Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et
                dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero
                eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr
                ut dolores magna sit. Sea dolore sed et.
              </p>
              <Link
                href="/product"
                className="btn btn-primary border-inner py-3 px-5 me-3"
              >
                Shop Now
              </Link>
              <a
                href="/service"
                className="btn btn-dark border-inner py-3 px-5"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Offer End --> */}
      {/* <!-- Testimonial Start --> */}
      <div className="container-fluid py-5">
        <div className="container">
          <Slider {...settingsT}>
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
      {/* <!-- Testimonial End --> */}
    </>
  );
}

export default Main;
