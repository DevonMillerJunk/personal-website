import React, { Component } from "react";
import { resumeId } from "../constants/constants";
import Navbar from "../components/Navbar";

class Resume extends Component<any, any> {
  public render() {
    return (
      <iframe
        title="pdf-viewer"
        className="resume-iframe"
        src={`https://drive.google.com/file/d/${resumeId}/preview?usp=embed_googleplus`}
      />
    );
  }
}

export default Resume;
