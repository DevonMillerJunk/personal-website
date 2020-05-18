import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { IJob, IJobProject } from "../constants/interfaces";
import { lcboInfo } from "../constants/constants";
import JobProjectCard from "../components/JobProjectCard";

class LCBO extends Component<any, IJob> {
  constructor(props: any) {
    super(props);
    this.state = lcboInfo;
  }

  public render() {
    return (
      <div className="lcbo-container job-container">
        <Navbar
          titleImage={this.state.navbarLogo || this.state.logo}
          link={this.state.website}
        />
        <div className="lcbo-description-container job-description-container">
          <div className="lcbo-description-title job-description-title">{`My Work at ${this.state.title}`}</div>
          <div className="lcbo-description job-description">{`${this.state.description}`}</div>
        </div>
        <div className="lcbo-project-title-container job-project-title-container">
          <div className="lcbo-project-title job-projects-title">{`The Projects I worked on at ${this.state.title}`}</div>
          <div className="lcbo-projects-container job-projects-container">
            {this.state.projects.map((project: IJobProject) => (
              <JobProjectCard info={project} />
            ))}
          </div>
        </div>
        <div className="lcbo-endnote-container job-endnote-container">
          <div className="lcbo-endnote-text job-endnote-text">
            {`Want more information about ${this.state.title}? Click here:`}
          </div>
          <div
            className="job-endnote-image-container"
            onClick={this.buttonHandler}
          >
            <img
              src={this.state.navbarLogo || this.state.logo}
              className="job-endnote-image"
              alt="logo"
            />
          </div>
        </div>
      </div>
    );
  }

  private buttonHandler = () => {
    if (this.state.website) {
      window.open(this.state.website, "mywindow");
    }
  };
}

export default LCBO;
