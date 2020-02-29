import React, { Component } from "react";
import "./alert-popup.css";

import carCrashIcon from "../assert/car-crash-icon.png";

class AlertPopup extends Component {
  state = {};

  render() {
    const accident = this.props.accident;
    return (
      <div className="alert-popup">
        <div
          className="background-blur"
          onClick={this.props.handleAlertBoxClose}
        />
        <div className="alert-content-holder">
          <div className="popup-box" key={accident.id}>
            <div className="img-container">
              <img src={carCrashIcon} alt="" />
            </div>
            <div className="content">
              <div className="top-section">
                <div className="title">{accident.location}</div>
                <div className="date">{accident.date}</div>
              </div>
              <div className="middle-section">
                <span>{accident.patientName}</span>, {accident.license_no}
              </div>
              <div className="button-section">
                <button
                  onClick={() => this.props.handleServedBtnClick(accident.id)}>
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AlertPopup;
