import React, { Component } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

class Innovation extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="innova">
          <div>
          <div>
            <h1>What We Do</h1>
            <h2>
              Innovative Design & <br></br> Branding
            </h2>
            <span>
              We understand our client's business goals<br></br>
              first then call decisions are made the those.
            </span>
            </div>
            <div>
              <button>
                Learn More <BsFillArrowRightCircleFill />
              </button>
            </div>
            <div className="pagination2">
            <a href="#">❮</a>
            <a href="#">❯</a>
          </div>
          </div>

          <div className="manset">
            <img src={require("../images/manset.jpg")} alt="" />
          </div>
         
        </div>

        <div className="client">
          <h1>What Our Client Say</h1>
          <span>
            We understand our client's business goals<br></br>
            first then call decisions are made the those.
          </span>
        </div>
      </>
    );
  }
}

export default Innovation;
