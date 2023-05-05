import React, { Component } from "react";
import { AiFillTwitterCircle ,AiFillLinkedin} from "react-icons/ai";
import {BsFacebook,BsGithub} from "react-icons/bs";

class Advertise extends Component {
  state = {
    iframe: [
      {
        video: "https://www.youtube.com/embed/uOA5h_KdjO4",
      },
      {
        video: "https://www.youtube.com/embed/uOA5h_KdjO4",
      },
      {
        video: "https://www.youtube.com/embed/uOA5h_KdjO4",
      },
    ],

    cards: [
      {
        image: require("../images/profile1.png"),
        name: "John sena",
        job: "Frontend Developer",
        describe: "Our client's business goals first then all decisions.",
        icons: {
          twitter: "fa-twitter",
          facebook: "fa-facebook",
          instagram: "fa-instagram",
          linkedin: "fa-linkedin",
        },
      },
      {
        image: require("../images/profile1.png"),
        name: "Maha rana",
        job: "ux/ui Designer",
        describe: "Our client's business goals first then all decisions.",
        icons: {
          twitter: "",
          facebook: "",
          instagram: "",
          linkedin: "",
        },
      },
      {
        image: require("../images/profile1.png"),
        name: "Naredra modi",
        job: "Designer",
        describe: "Our client's business goals first then all decisions.",
        icons: {
          twitter: "",
          facebook: "",
          instagram: "",
          linkedin: "",
        },
      },
      {
        image: require("../images/profile1.png"),
        name: "Amabani",
        job: "Fullstack Developer",
        describe: "Our client's business goals first then all decisions.",
        icons: {
          twitter: "",
          facebook: "",
          instagram: "",
          linkedin: "",
        },
      },
    ],
  };
  render() {
    return (
      <>
        <div className="shape-tr">
          <div className="branding">
            <h1
              style={{
                color: "white",
                textAlign: "start",
                marginLeft: "120px",
              }}
            >
              Digital Branding<br></br>& Advertising{" "}
            </h1>
            <p className="para">
              We understand our client's business goals first then all decisions
              are made with those.
            </p>
            <div className="pagination">
              <a href="#">❮</a>
              <a href="#">❯</a>
            </div>
          </div>            

          <div className="video-container">{this.getVideo()}</div>
        </div>

        <div className="team">
          <h2>
            Our Special <br></br>Team
          </h2>
          <br></br>
          <span>
            We strive to understand our client's business <br></br>goals first
            then all decisions
          </span>
        </div>
        <div className="profile-container">{this.getProfileCard()}</div>
      </>
    );
  }

  getVideo = () => {
    return this.state.iframe.map((vid) => {
      return (
        <div className="video-container">
          <div key={vid.video}>
            <iframe src={vid.video}  title="youtube"  frameborder="0" allowFullScreen></iframe>
          </div>
        </div>
      );
    });
  };

  getProfileCard = () => {
    return this.state.cards.map((pro) => {
      return (
        <div className="profile" key={pro.name}>
          <img src={pro.image} alt="" />
          <h3>{pro.name}</h3>
          <p>{pro.job}</p>
          <span>{pro.describe}</span>
        
          <div className="icons">
          <a href="#">
            <AiFillTwitterCircle />
          </a>
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <BsGithub/>
          </a>
          <a href="#">
            <AiFillLinkedin/>
          </a>
          </div>
        </div>
      );
    });
  };
}

export default Advertise;
