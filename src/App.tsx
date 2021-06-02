import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./views/Home";
import { RoutesEnum } from "./constants/interfaces";

class App extends Component<any, any> {
  public render() {
    return (
      <div className="App">
        <div className="app-border-container"/>
        <div className="app-container scroll" >
        <Router>
          <div className="app-container-spacer"/>
          <Switch>
            <Route exact path={RoutesEnum.HOME} component={Home} />
            <Route render={() => <Redirect to={RoutesEnum.HOME} />} />
          </Switch>
        </Router>
        </div>
      </div>
    );
  }
}

export default App;
