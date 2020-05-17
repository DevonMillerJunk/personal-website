import React, { Component } from "react";
import Navbar from "../components/Navbar";
import LCBOnextLogo from "../assets/lcbonext.webp";

class LCBO extends Component<any, any> {
  public render() {
    return (
      <div className="lcbo-container">
        <Navbar titleImage={LCBOnextLogo} />
      </div>
    );
  }
}

export default LCBO;
