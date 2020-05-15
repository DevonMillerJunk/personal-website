import React, { Component } from "react";
import { IMedia } from "../constants/interfaces";

interface INetworkProps {
  info: IMedia;
}

class Network extends Component<INetworkProps, any> {
  public render() {
    return (
      <div
        className={`network-button-container network-button-${this.props.info.title}`}
        onClick={this.buttonHandler}
      >
        <div className={`network-container network-${this.props.info.title}`}>
          <img src={this.props.info.logo} className="network-logo" alt="logo" />
          <div className="network-title">{this.props.info.title}</div>
        </div>
      </div>
    );
  }

  private buttonHandler = () => {
    window.open(this.props.info.link, "mywindow");
  };
}

export default Network;
