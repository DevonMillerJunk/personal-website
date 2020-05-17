import React, { Component } from "react";
import { IJob } from "../constants/interfaces";
import { Redirect } from "react-router";

interface IJobCardProps {
  info: IJob;
}

interface IJobCardState {
  redirect?: string;
}

class JobCard extends Component<IJobCardProps, IJobCardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      redirect: "",
    };
  }

  public render() {
    if (this.state.redirect !== "") {
      return <Redirect to={this.state.redirect as string} />;
    }
    return (
      <div
        className={`job-card-container job-card-${this.props.info.htmlName}`}
        onClick={this.onClick}
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

  private onClick = () => {
    this.setState({
      redirect: this.props.info.link,
    });
  };
}

export default JobCard;
