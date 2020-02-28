import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
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
          <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
            {this.state.interestInfo.map(this.renderItem)}
          </Carousel>
        </div>
      </div>
    );
  }

  public renderItem = (interest: IInterest) => {
    return (
      <Carousel.Item>
        <img className="d-block w-100" src={interest.image} alt="First slide" />
        <Carousel.Caption>
          <h3>{interest.title}</h3>
          <p>{interest.info}</p>
        </Carousel.Caption>
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
