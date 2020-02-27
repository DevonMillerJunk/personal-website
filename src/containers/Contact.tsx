import React, { Component } from "react";
import { IMedia } from "../constants/interfaces";
import { contactInfo } from "../constants/constants";
import Network from "../components/Network";

interface IContactState {
  title: string;
  info: string;
  mediaInfo: IMedia[];
}
class Contact extends Component<any, IContactState> {
  constructor(props: any) {
    super(props);
    this.state = contactInfo;
  }

  public render() {
    return (
      <div className="contact-container">
        <div className="title container-title">{this.state.title}</div>
        <div className="contact-info-container">
          <p>{this.state.info}</p>
          <div className="contact-media-container">
            {this.state.mediaInfo.map((communication: IMedia) => {
              return <Network info={communication} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
