import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./views/Home";
import Resume from "./views/Resume";
import Doorr from "./views/Doorr";
import LCBO from "./views/LCBO";
import { RoutesEnum } from "./constants/interfaces";

class App extends Component<any, any> {
  public render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={RoutesEnum.HOME} component={Home} />
            <Route exact path={RoutesEnum.RESUME} component={Resume} />
            <Route exact path={RoutesEnum.DOORR} component={Doorr} />
            <Route exact path={RoutesEnum.LCBONEXT} component={LCBO} />
            <Route render={() => <Redirect to={RoutesEnum.HOME} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
