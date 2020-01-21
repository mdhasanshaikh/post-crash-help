import React, { Component } from "react";
import "./text-with-title.css";

class TextWithTitle extends Component {
  state = {};
  render() {
    return (
      <div className="text-with-title">
        <div className="title">{this.props.content.title}</div>
        <div className="text">{this.props.content.text}</div>
      </div>
    );
  }
}

export default TextWithTitle;
