import React, { Component } from "react";
import Contact from "../containers/Contact";
// import Experience from "../containers/Experience";
import Interest from "../containers/Interest";
import Profile from "../containers/Profile";
// import Project from "../containers/Project";
import { Carousel } from "react-bootstrap";

import background from "../assets/background.jpg";
import background1 from "../assets/background1.jpg";
import background2 from "../assets/background2.jpg";
import background3 from "../assets/background3.jpg";
import background4 from "../assets/background4.jpg";

interface IHomeState {
  backgroundImages: any[];
}

class Home extends Component<any, IHomeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      backgroundImages: [
        background,
        background1,
        background2,
        background3,
        background4,
      ],
    };
  }

  public render() {
    return (
      <div className="home-container">
        <div className="app-container">
          <div className="section-container">
            <Profile />
          </div>
          {/* <Experience />
          <Project /> */}
          <div className="section-container">
            <Interest />
          </div>
          <div className="section-container">
            <Contact />
          </div>
        </div>
        <Carousel
          className="background-image-container"
          interval={8000}
          controls={false}
          fade={true}
        >
          {this.state.backgroundImages.map(this.renderBackgroundImage)}
        </Carousel>
      </div>
    );
  }

  private renderBackgroundImage = (image: any) => {
    return (
      <Carousel.Item>
        <img className="app-background-image" src={image} alt="First slide" />
      </Carousel.Item>
    );
  };
}

export default Home;
