import React, { Component } from "react";
import { profileInfo } from '../constants/constants';
import { IProfileState } from '../constants/interfaces';

class Profile extends Component<any, IProfileState> {

    constructor(props: any) {
        super(props);
        this.state = profileInfo;
    }

    public render() {
        return (
            <div className="profile-container">
                <img src={this.state.background} className="profile-background-image" alt="logo" />
                <div className="profile-text-container">
                    <h1 className="profile-title">{this.state.title}</h1>
                    <p className="profile-info">{this.state.info}</p>
                </div>
            </div>
        );
    }
}
export default Profile;
