import React, { Component } from "react";
import Navbar from "../components/Navbar";
import DoorrLogoColour from "../assets/doorr-coloured.png";

class Doorr extends Component<any, any> {
  public render() {
    return (
      <div className="doorr-container">
        <Navbar titleImage={DoorrLogoColour} />
      </div>
    );
  }
}

export default Doorr;
