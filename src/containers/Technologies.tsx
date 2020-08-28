import React, { Component } from "react";
import { technologyInfo } from "../constants/constants";
import { ITechnology, ITechnologyState } from "../constants/interfaces";
import { Card } from "react-bootstrap";

class Experience extends Component<any, ITechnologyState> {
  constructor(props: any) {
    super(props);
    this.state = technologyInfo;
  }

  public render() {
    return (
      <div className="technologies-container">
        <h1 className="title container-title">{this.state.title}</h1>
        <div className="technology-photos-container">
          {this.state.technologies.map((technology: ITechnology) => (
            <div className={`technology-logo technology-${technology.title}`}>
              <img src={technology.logo} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Experience;
