import React from "react";
import Contact from "./containers/Contact";
import { Row, Container } from "react-bootstrap";
// import Experience from "./containers/Experience";
import Interest from "./containers/Interest";
// import Profile from "./containers/Profile";
// import Project from "./containers/Project";

function App() {
  return (
    <div className="App">
      <Container fluid className="app-container">
        {/* <Row>
          <Profile />
        </Row> */}
        {/* <Row>
          <Experience />
        </Row> */}
        {/* <Row>
          <Project />
        </Row> */}
        <Row>
          <Interest />
        </Row>
        <Row>
          <Contact />
        </Row>
      </Container>
    </div>
  );
}

export default App;
