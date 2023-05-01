import React from "react";
import { Form, Nav } from "react-bootstrap";
import image from "/logo.png";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <img
          src={image}
          alt="Logo"
          height="45"
          className="d-inline-block align-text-top"
        />
        <form className="d-flex align-items-center" role="search">
          <p className="">
            {" "}
            <FaSearch />{" "}
          </p>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Destination
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Contact</a>
          </li>
        </ul>
        <button className="btn btn btn-warning" type="submit">
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
