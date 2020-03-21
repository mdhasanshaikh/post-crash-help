import React, { Component } from "react";
import "./alert-popup.css";

import { connect } from "react-redux";
import { updateAccident } from "../../actions/accidentActions";
import PropTypes from "prop-types";

import MapContainer from "./components/map-container";

class AlertPopup extends Component {
  state = {};

  static propTypes = {
    updateAccident: PropTypes.func.isRequired
  };

  handleServedBtnClick = async accidentId => {
    await this.props.updateAccident(accidentId);
    this.props.handleAlertBoxClose();
  };

  render() {
    const accident = this.props.accident;

    return (
      <div className="alert-popup">
        <div
          className="background-blur"
          onClick={this.props.handleAlertBoxClose}
        />
        <div className="map-container">
          <MapContainer
            accident={this.props.accident}
            ambulances={this.props.ambulances}
          />
        </div>
        <div className="popup-box">
          <div className="content">
            <div className="top-section">
              <div className="title">{accident.location}</div>
              <div className="date">{accident.date}</div>
            </div>
            <div className="middle-section">
              <span>{accident.patientName}</span>, {accident.license_no}
            </div>
            <div className="button-section">
              <button onClick={() => this.handleServedBtnClick(accident.id)}>
                Serve
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { updateAccident })(AlertPopup);
