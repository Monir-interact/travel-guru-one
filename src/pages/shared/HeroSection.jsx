import React from "react";
import { Container } from "react-bootstrap";
import bgImage from "../../assets/images/Rectangle 1.png";
import "../../../src/App.css";
import { FaArrowRight } from "react-icons/fa";
import sajek from "../../../src/assets/images/Sajek.png";
import sreemongol from "../../../src/assets/images/Sreemongol.png";
import sundarbon from "../../../src/assets/images/sundorbon.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="position-relative">
      <div className="hero-image ">
        <div className="w-full gradient-one">
          <div className="d-flex align-items-center ms-5 me-5">
            <div className="text-white caption-cox">
              <h1 className="headline">Cox's bazar</h1>
              <p className="paraGraph">
                Cox's Bazar is a city, fishing port, tourism centre and district
                headquarters in southeastern Bangladesh. It is famous mostly for
                its long natural sandy beach, and it ...
              </p>
              <button className="btn btn-warning">
                Booking <FaArrowRight />{" "}
              </button>
            </div>
            <div className="d-flex mx-auto">
              <Link to="/booking">
                <img
                  className="me-4 border border-danger border-5 rounded-5 img-toure"
                  src={sajek}
                  alt=""
                />
                <h4 className="text-white mt-2">SAJEK</h4>
              </Link>
              <Link to="/booking">
                <img
                  className="me-4 border border-danger border-5 rounded-5 img-toure"
                  src={sreemongol}
                  alt=""
                />
                <h4 className="text-white mt-2">SREEMONGOL</h4>
              </Link>
              <Link to="/booking">
                <img
                  className="me-4 border border-danger border-5 rounded-5 img-toure"
                  src={sundarbon}
                  alt=""
                />
                <h4 className="text-white mt-2">SUNDARBON</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="image-gradiend">
        <div className="position-relative z-3">
          <img
            src={bgImage}
            className="card-img-top w-full h-screen bg-opacity-10 "
            alt="..."
          />
        </div>
        <div className="position-absolute top-50 translate-middle-y z-1 d-flex flex-grow-1 mx-auto">
          <div>
            <h1>Cox's bazar</h1>
            <p>
              Cox's Bazar is a city, fishing port, tourism centre and district
              headquarters in southeastern Bangladesh. It is famous mostly for
              its long natural sandy beach, and it ...
            </p>
            <button className="btn btn-warning">
              Booking <FaArrowRight />{" "}
            </button>
          </div>
          <div className="d-flex mx-auto">
            <img 
              className="me-4 border border-danger border-5 rounded-5 img-toure"
              src={sajek}
              alt=""
            />
            <img
              className="me-4 border border-danger border-5 rounded-5 img-toure"
              src={sreemongol}
              alt=""
            />
            <img className="me-4 border border-danger border-5 rounded-5 img-toure" src={sundarbon} alt="" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
