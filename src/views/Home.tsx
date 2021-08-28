import React, { Component } from "react";
import Contact from "../containers/Contact";
import Experience from "../containers/Experience";
import Interest from "../containers/Interest";
import Profile from "../containers/Profile";
import Technologies from "../containers/Technologies";
// import Project from "../containers/Project";

import background from "../assets/background.jpg";

interface IHomeState {
  backgroundImage: any;
}

class Home extends Component<any, IHomeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      backgroundImage: background
    };
  }

  public render(): any {
    return (
      <div className="home-container">
        <div className="app-container">
          <div className="section-container">
            <Profile />
          </div>
          <div className="section-container">
            <Experience />
          </div>
          {/* <div className="section-container">
            <Project />
          </div> */}
          <div className="section-container">
            <Technologies />
          </div>
          <div className="section-container">
            <Interest />
          </div>
          <div className="section-container">
            <Contact />
          </div>
        </div>
        <div className="background-image-container">
          <img className="app-background-image" src={this.state.backgroundImage} />
        </div>
      </div>
    );
  }
}

export default Home;
