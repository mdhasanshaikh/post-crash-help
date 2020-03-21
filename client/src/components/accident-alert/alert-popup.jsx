import React, { Component } from "react";
import "./alert-popup.css";

import MapContainer from "./components/map-container";

class AlertPopup extends Component {
  state = {};

  render() {
    const accident = this.props.accident;
    const ambulances = this.props.ambulances;

    console.log(accident);
    console.log(ambulances);

    return (
      <div className="alert-popup">
        <div
          className="background-blur"
          onClick={this.props.handleAlertBoxClose}
        />
        <div className="popup-box">
          <div className="map-container">
            <MapContainer
              accident={this.props.accident}
              ambulances={this.props.ambulances}
            />
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
    );
  }
}

export default AlertPopup;
