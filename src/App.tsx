import React from "react";
import Contact from "./containers/Contact";
import { Container } from "react-bootstrap";
// import Experience from "./containers/Experience";
import Interest from "./containers/Interest";
import Profile from "./containers/Profile";
// import Project from "./containers/Project";

function App() {
  return (
    <div className="App">
      <Container fluid className="app-container">
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
      </Container>
    </div>
  );
}

export default App;
