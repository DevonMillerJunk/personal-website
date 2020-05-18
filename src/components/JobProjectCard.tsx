import React, { Component } from "react";
import { IJobProject } from "../constants/interfaces";

interface IJobProjectCardProps {
  info: IJobProject;
}

class JobProjectCard extends Component<IJobProjectCardProps, any> {
  public render() {
    return (
      <div
        className={`job-project-card-container project-card-${this.props.info.title}`}
      >
        <img
          src={this.props.info.picture}
          className="job-project-logo"
          alt="logo"
        />
        <div className="job-project-card-info">
          <div className="job-project-card-title">{this.props.info.title}</div>
          <div className="job-project-card-description">
            {this.props.info.info}
          </div>
        </div>
      </div>
    );
  }
}

export default JobProjectCard;
