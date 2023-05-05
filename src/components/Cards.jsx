import React, { Component } from "react";

export default class Cards extends Component {
  state = {
    cards: [
      {
        image: require("../images/laptop.jpg"),
        header: "Great Support",
        description:
          "We strive to understand our client's business goals first then all decisions are made with those",
        footer: "Learn More",
      },
      {
        image: require("../images/desktop.jpg"),
        header: "Pixel-Perfect Design",
        description:
          "We strive to understand our client's business goals first then all decisions are made with those",
        footer: "Learn More",
      },
      {
        image: require("../images/groupdec.jpg"),
        header: "SEO Optimized",
        description:
          "We strive to understand our client's business goals first then all decisions are made with those",
        footer: "Learn More",
      },
    ],
  };
  render() {
    return (
      <>
        <div className="flex">
          <div className="flex-1">
            <h2>Marketing & Design</h2>
            <p>
              As a digital marketing agency, we strive to understand our
              client's
              <br />
              business goals first then all decisions are made with those.
            </p>
          </div> 

          <div className="grid">{this.getCard()}</div>
   <div className="shape">
            <div className="rect">
              <span> 75%</span> <br /> Annualized Growth
            </div>
            <div className="circle">
              <span>556+</span> <br /> Clients We've Worked <br /> with
            </div>
            <div className="poly">
              <span>7895670</span> <br /> Clients Conversions <br /> This Year
            </div>
          </div>
        </div>
      </>
    );
  }

  getCard = () => {
    return this.state.cards.map((card) => {
      return (
        <div className="grid-item" key={card.image}>
          <div className="card">
            <img className="card-image" src={card.image} alt="rome" />

            <div className="card-content">
              <h1 className="card-header">{card.header}</h1>

              <p className="card-text">{card.description}</p>

              <button className="card-btn">
                {card.footer} <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
}
