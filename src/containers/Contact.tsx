import React, { Component } from "react";
import { IMedia, IContactState } from "../constants/interfaces";
import { contactInfo } from "../constants/constants";
import Network from "../components/Network";

class Contact extends Component<any, IContactState> {
  constructor(props: any) {
    super(props);
    this.state = contactInfo;
  }

  public render() {
    return (
      <div className="contact-container">
        <h1 className="title container-title">{this.state.title}</h1>
        <p>{this.state.info}</p>
        <div className="contact-media-container">
          {this.state.mediaInfo.map((communication: IMedia) => {
            return <Network info={communication} />;
          })}
        </div>
      </div>
    );
  }
}

export default Contact;
