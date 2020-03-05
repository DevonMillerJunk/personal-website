import React, { Component } from "react";
import { IMedia } from "../constants/interfaces";

interface INetworkProps {
  info: IMedia;
}

class Network extends Component<INetworkProps, any> {
  public render() {
    return (
      <div className="network-container">
        <a
          rel="noopener noreferrer"
          href={this.props.info.link}
          target="_blank"
        >
          <img src={this.props.info.logo} className="network-logo" alt="logo" />
        </a>
      </div>
    );
  }
}

export default Network;
