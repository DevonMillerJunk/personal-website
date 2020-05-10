import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./views/Home";
import Resume from "./views/Resume";

class App extends Component<any, any> {
  public render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
