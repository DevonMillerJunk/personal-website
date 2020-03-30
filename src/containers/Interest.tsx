import React, { Component } from "react";
// import { RouteComponentProps } from "react-router";
import { IInterest, IInterestState } from "../constants/interfaces";
import { interestInfo } from "../constants/constants";
import { Carousel } from "react-bootstrap";

interface IInterestCarouselState {
  index: number;
}

class Interest extends Component<any, IInterestState & IInterestCarouselState> {
  constructor(props: any) {
    super(props);
    this.state = { ...interestInfo, index: 0 };
  }

  public render() {
    return (
      <div className="interest-container">
        <div className="title container-title">{this.state.title}</div>
        <div className="interest-info-container">
          <p>{this.state.info}</p>
          <Carousel pauseOnHover={true} interval={null} indicators={true}>
            {this.state.interestInfo.map(this.renderItem)}
          </Carousel>
        </div>
      </div>
    );
  }

  public renderItem = (interest: IInterest) => {
    return (
      <Carousel.Item>
        <div className="interest-slide-container">
          <div className="interest-image-container">
            <img
              className="d-block w-100"
              src={interest.image}
              alt="First slide"
            />
          </div>
          <div className="interest-description-container">
            <h3>{interest.title}</h3>
            <p>{interest.info}</p>
          </div>
        </div>
      </Carousel.Item>
    );
  };

  private handleSelect = (selectedIndex: number, e: any) => {
    this.setState({
      index: selectedIndex
    });
  };
}
export default Interest;
