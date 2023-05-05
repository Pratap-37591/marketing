import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer-container">
          <h3 className="footer-header">Smartz</h3>
          <div className="footer">
            <div className="social-media1">
              <h4 className="h4-header">Social Media Links</h4>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Linkedin</a>
                </li>
              </ul>
            </div>
            <div className="company">
              <h4 className="h4-header">Company</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Work</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="contact">
              <h4 className="h4-header">Contact</h4>
              <address>1234 N Zak Avenue -6, State 3100.</address>
              <span>+0081 23 456 789</span>
              <p>jpuidesigner24@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <span>
            &#169; Copyright 2021 Smart Marketing Agency All Rights Reserved
          </span>
        </div>
      </>
    );
  }
}
