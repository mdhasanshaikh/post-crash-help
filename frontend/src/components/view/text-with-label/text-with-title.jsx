import React, { Component } from "react";
import "./text-with-title.css";

class TextWithLabel extends Component {
  state = {};
  render() {
    return (
      <div className="text-with-label">
        <div className="label">{this.props.content.title}</div>
        <div className="text">{this.props.content.text}</div>
      </div>
    );
  }
}

export default TextWithLabel;
