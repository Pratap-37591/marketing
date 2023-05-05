import React, { Component } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";

class Navbars extends Component {
  render() {
    return (
      <>
        <header className="header">
          <a href="#" className="logo">
            Portfolio
          </a>

          <nav className="navbar">
            <a href="#" style={{ "--i": 1 }} className="active">
              Home
            </a>
            <a href="#" style={{ "--i": 2 }}>
              Service
            </a>
            <a href="#" style={{ "--i": 3 }}>
              About
            </a>
            <a href="#" style={{ "--i": 4 }}>
              Contact
            </a>
          </nav>
        </header>

        <section className="home">
          <div className="home-content">
            <h3># Digital </h3>
            <h1>Marketing</h1>
            <h3>
              Agency <span className="multiple-text"></span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              quae nostrum aliquid doloremque quaerat. Soluta.
            </p>
            <div className="social-media">
              <a href="#" style={{ "--i": 7 }}>
                {" "}
                <BsFacebook />{" "}
              </a>
              <a href="#" style={{ "--i": 8 }}>
                <AiFillTwitterCircle />
              </a>
              <a href="#" style={{ "--i": 9 }}>
                <BsInstagram />{" "}
              </a>
              <a href="#" style={{ "--i": 10 }}>
                <AiFillLinkedin />{" "}
              </a>
            </div>
            <a href="#" className="btn">
              Get Started
              <span className="arrow">
                <IoIosArrowDroprightCircle />
              </span>
            </a>
          </div>

          <div className="home-img">
            <img src={require("../images/man1.jpg")} alt="home" />
          </div>
        </section>
      </>
    );
  }
}
export default Navbars;
