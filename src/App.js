import React, { Component } from "react";

// import Navbars from "./components/Navbars";
import Cards from "./components/Cards";
// import CardList from "./components/CardList";
// import Advertise from "./components/Advertise";
// import Innovation from "./components/Innovation";
// import Carosuel from "./components/Carosuel";
// import Footer from "./components/Footer";

export default class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        {/* <Navbars /> */}
        <Cards />
        {/* <CardList />
        <Advertise />
        <Innovation />
        <Carosuel />
        <Footer /> */}
      </div>
    );
  }
}
