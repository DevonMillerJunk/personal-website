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
        <div className="lcbo-projects-container job-projects-container">
          {this.state.projects.map((project: IJobProject) => (
            <JobProjectCard info={project} />
          ))}
        </div>
      </div>
    );
  }
}

export default LCBO;
