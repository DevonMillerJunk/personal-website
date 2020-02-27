import React from "react";
import Contact from "./containers/Contact";
import Experience from "./containers/Experience";
import Interest from "./containers/Interest";
import Profile from "./containers/Profile";
import Project from "./containers/Project";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {/* <Profile />
        <Experience />
        <Project />
        <Interest /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
