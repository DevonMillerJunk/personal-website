import React, { Component } from "react";
import { experienceInfo } from "../constants/constants";
import { IJob, IExperienceState } from "../constants/interfaces";
import JobCard from "../components/JobCard";

class Experience extends Component<any, IExperienceState> {
  constructor(props: any) {
    super(props);
    this.state = experienceInfo;
  }

  public render() {
    return (
      <div className="experience-container">
        <h1 className="title container-title">{this.state.title}</h1>
        <div className="experience-jobs-container">
          {this.state.jobs.map((job: IJob) => (
            <JobCard info={job} />
          ))}
        </div>
      </div>
    );
  }
}
export default Experience;
