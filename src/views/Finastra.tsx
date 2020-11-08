import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { IJob, IJobProject } from "../constants/interfaces";
import { finastraInfo } from "../constants/constants";
import JobProjectCard from "../components/JobProjectCard";

class Finastra extends Component<any, IJob> {
  constructor(props: any) {
    super(props);
    this.state = finastraInfo;
  }

  public render() {
    return (
      <div className="finastra-container job-container">
        <Navbar
          titleImage={this.state.navbarLogo || this.state.logo}
          link={this.state.website}
        />
        <div className="finastra-description-container job-description-container">
          <div className="finastra-description-title job-description-title">{`My Work at ${this.state.title}`}</div>
          <div className="finastra-description job-description">{`${this.state.description}`}</div>
        </div>
        <div className="finastra-project-title-container job-project-title-container">
          <div className="finastra-project-title job-projects-title">{`Some of the Projects I Worked On`}</div>
          <div className="finastra-projects-container job-projects-container">
            {this.state.projects.map((project: IJobProject) => (
              <JobProjectCard info={project} />
            ))}
          </div>
        </div>
        <div className="finastra-endnote-container job-endnote-container">
          <div className="finastra-endnote-text job-endnote-text">
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

export default Finastra;
