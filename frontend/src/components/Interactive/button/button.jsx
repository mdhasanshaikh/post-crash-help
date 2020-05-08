import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  state = {};

  getButtonClasses = (type, status) => {
    let classes = "button " + type;
    if (status === "disable") {
      classes += "-" + status;
    }
    return classes;
  };

  render() {
    const button = this.props.button;
    return (
      <button
        className={this.getButtonClasses(button.type, button.status)}
        onClick={this.props.handleButtonClick}
        disabled={button.status === "disable" ? true : false}>
        {button.text}
      </button>
    );
  }
}

export default Button;
