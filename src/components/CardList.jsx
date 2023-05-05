import React, { Component } from "react";

export default class CardList extends Component {
  state = {
    cards1: [
      {
        imageurl: require("../images/bob2.png"),
        title: "Fully Responsive.",
        description:
          "Our client's business goals first then all decisions are made with those.",
      },
      {
        imageurl: require("../images/bob2.png"),
        title: "SEO Optimized",
        description:
          "Our client's business goals first then all decisions are made with those.",
      },
      {
        imageurl: require("../images/bob2.png"),
        title: "Ecommerce Integrated",
        description:
          "Our client's business goals first then all decisions are made with those.",
      },
      {
        imageurl: require("../images/bob2.png"),
        title: "Awesome Features",
        description:
          "Our client's business goals first then all decisions are made with those.",
      },
      {
        imageurl: require("../images/bob2.png"),
        title: "Layer Slider",
        description:
          "Our client's business goals first then all decisions are made with those.",
      },
      {
        imageurl: require("../images/bob2.png"),
        title: "One-Click Import",
        description:
          "Our client's business goals first then all decisions are made with those.",
      },
      
    ],
  };
  render() {
    return (
      <>
        <div className="Features">
          <div className="some">
            <h1>Some Awesome <br/> Features</h1>
            <span>
              As a digital marketing agency, we strive to <br/>understand our
              client's business goals first <br/>then all decisions are made with
              those
            </span>
          </div>
          <div className="Explore">
            <span className="all">Explore all Features &rarr;</span>
          </div>
        </div>

        <div className="row">{this.getCardList()}</div>
      </>
    );
  }

  getCardList = () => {
    return this.state.cards1.map((cards1) => {
      return (
        <div key={cards1.image}>
          <div className="card1">
            <div>
              <img
                src={cards1.imageurl}
                style={{ width: "200px", height: "220px" }}
                className="card1-image"
                alt="hg"
              />

              <div className="card1-content">
                <h5 className="card1-title" style={{ fontSize: "20px" }}>
                  {cards1.title}
                </h5>
                <p
                  className="card1-desc"
                  style={{ fontSize: "17px", width: "200px", margin: "auto" }}
                >
                  {cards1.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
}
