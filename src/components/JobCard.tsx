import React, { Component } from "react";
import { IJob } from "../constants/interfaces";

interface IJobCardProps {
  info: IJob;
}

class JobCard extends Component<IJobCardProps, any> {
  public render() {
    return (
      <div
        className={`job-card-container job-card-${this.props.info.htmlName}`}
      >
        <img src={this.props.info.logo} className="job-logo" alt="logo" />
        <div className="job-card-info">
          <div className="job-card-title">{this.props.info.title}</div>
          <div className="job-card-position">{this.props.info.position}</div>
          <div className="job-card-date-range">{this.props.info.dateRange}</div>
        </div>
      </div>
    );
  }

  // private onClick = () => {
  //   this.props.history.pushState(this.props.info.link);
  // };
}

export default JobCard;
