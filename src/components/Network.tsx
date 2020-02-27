import React, { Component } from "react";
import { IMedia } from "../constants/interfaces";

interface INetworkProps {
  info: IMedia;
}

class Network extends Component<INetworkProps, any> {
  public render() {
    return (
      <div className="network-container">
        <img src={this.props.info.logo} className="network-logo" alt="logo" />
        <div className="network-link-container">
          <a
            rel="noopener noreferrer"
            href={this.props.info.link}
            target="_blank"
          >
            {this.props.info.title}
          </a>
        </div>
      </div>
    );
  }
}

export default Network;
