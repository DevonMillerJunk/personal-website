import React, { Component } from "react";
import { RoutesEnum } from "../constants/interfaces";
import { Redirect } from "react-router";
import backarrow from "../assets/backarrow.png";

interface INavbarProps {
  titleImage?: any;
  link?: any;
}

interface INavbarState {
  goHome: boolean;
}

class Navbar extends Component<INavbarProps, INavbarState> {
  constructor(props: any) {
    super(props);

    this.state = {
      goHome: false,
    };
  }

  public render() {
    if (this.state.goHome) {
      return <Redirect to={RoutesEnum.HOME} />;
    }
    return (
      <div className={`navbar-container`}>
        <div className="navbar-back-arrow-container" onClick={this.goBack}>
          <img src={backarrow} className="navbar-back-arrow" alt="logo" />
        </div>
        {this.renderTitleImage()}
      </div>
    );
  }

  private renderTitleImage = () => {
    if (this.props.titleImage && this.props.link) {
      return (
        <div className="navbar-title-container" onClick={this.buttonHandler}>
          <img
            src={this.props.titleImage}
            className="navbar-title-image"
            alt="logo"
          />
        </div>
      );
    }
    return null;
  };

  private goBack = () => {
    this.setState({
      goHome: true,
    });
  };

  private buttonHandler = () => {
    if (this.props.link) {
      window.open(this.props.link, "mywindow");
    }
  };
}

export default Navbar;
