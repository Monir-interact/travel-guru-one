import React from "react";
import NavBar from "./NavBar";
import { FaArrowRight } from "react-icons/fa";

const Booking = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="position-relative">
        <div className="hero-image ">
          <div className="w-full gradient-one">
            <div className="d-flex align-items-center ms-5 me-5">
              <div className="text-white caption-cox">
                <h1 className="headline">SAJEK</h1>
                <p className="paraGraph">
                  Cox's Bazar is a city, fishing port, tourism centre and
                  district headquarters in southeastern Bangladesh. It is famous
                  mostly for its long natural sandy beach, and it ...
                </p>
                <button className="btn btn-warning">
                  Booking <FaArrowRight />{" "}
                </button>
              </div>
              <div className="d-flex mx-auto">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
