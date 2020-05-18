import React, { Component } from "react";
import { IJobProject } from "../constants/interfaces";

interface IJobProjectCardProps {
  info: IJobProject;
}

class JobProjectCard extends Component<IJobProjectCardProps, any> {
  public render() {
    return (
      <div
        className={`job-project-card-container project-card-${this.props.info.htmlName}`}
      >
        <img
          src={this.props.info.picture}
          className="job-project-logo"
          alt="logo"
        />
        {this.renderDisclaimer()}
        <div className="job-project-card-info">
          <div className="job-project-card-title">{this.props.info.title}</div>
          <div className="job-project-card-description">
            {this.props.info.info}
          </div>
          <div className="job-project-technologies-container">
            {this.props.info.technologies.map((technology: string) =>
              this.renderTechnology(technology)
            )}
          </div>
        </div>
      </div>
    );
  }

  private renderDisclaimer = () => {
    if (this.props.info.disclaimer) {
      return (
        <div className="job-project-disclaimer">
          {this.props.info.disclaimer}
        </div>
      );
    }
    return null;
  };

  private renderTechnology = (technology: string) => {
    return <div className="job-project-technology">{technology}</div>;
  };
}

export default JobProjectCard;
