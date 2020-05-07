import React, { Component } from "react";
import { profileInfo } from "../constants/constants";
import { IProfileState } from "../constants/interfaces";

class Profile extends Component<any, IProfileState> {
  constructor(props: any) {
    super(props);
    this.state = profileInfo;
  }

  public render() {
    return (
      <div className="profile-container">
        <div className="profile-image-container">
          <img
            src={this.state.background}
            className="profile-background-image"
            alt="logo"
          />
        </div>
        <div className="profile-text-container">
          <h1 className="profile-title title">{this.state.title}</h1>
          <p className="profile-info">{this.state.info}</p>
        </div>
        {/* {this.state.info} */}
      </div>
    );
  }
}
export default Profile;
