import React, { Component } from "react";
import "./accident-alert-modal.css";

import { connect } from "react-redux";
import { updateAccident } from "../../actions/accidentActions";
import { getAmbulances, updateAmbulance } from "../../actions/ambulanceActions";
import PropTypes from "prop-types";

import MapContainer from "../google-map/google-map";
import Button from "../../components/Interactive/button/button";

class AlertPopup extends Component {
  state = {
    ambulance: {},
    serveButton: {
      text: "Serve",
      type: "contained",
      status: "normal",
    },
  };

  componentWillMount = async () => {
    await this.props.getAmbulances();
  };

  static propTypes = {
    ambulance: PropTypes.object.isRequired,
    updateAccident: PropTypes.func.isRequired,
    getAmbulances: PropTypes.func.isRequired,
    updateAmbulance: PropTypes.func.isRequired,
  };

  handleServedBtnClick = async (accidentId) => {
    await this.props.updateAccident(accidentId);
    this.props.handleAlertBoxClose();
  };

  handleServedBtnClick = async (accidentId) => {
    let ambulances = this.props.ambulance.ambulances;
    var isServed = false;

    ambulances.map(async (ambulance) => {
      console.log(ambulance.availability && !isServed);
      if (ambulance.availability && !isServed) {
        isServed = true;
        await this.props.updateAccident(accidentId, ambulance.vehicle_id);
        await this.props.updateAmbulance(ambulance._id);
        this.setState({});
      }
      return null;
    });
  };

  getServedBtn = (accident) => {
    var ambulances = this.props.ambulance.ambulances;
    ambulances = ambulances.filter(
      (ambulance) => ambulance.availability === true
    );

    const serveButton = this.state.serveButton;
    if (!ambulances.length) {
      serveButton.status = "disable";
    }

    return (
      <React.Fragment>
        <Button
          button={serveButton}
          handleButtonClick={() => this.handleServedBtnClick(accident.id)}
        />
        {ambulances.length ? (
          <div />
        ) : (
          <div className="error-text">
            Currently, no ambulance is avaialable.
          </div>
        )}
      </React.Fragment>
    );
  };

  render() {
    const accident = this.props.accident;

    return (
      <div className="accident-alert-modal">
        <div className="blur-bg" onClick={this.props.handleAlertBoxClose} />
        <div className="map-container">
          <MapContainer
            accident={this.props.accident}
            ambulances={this.props.ambulance.ambulances}
          />
        </div>
        <div className="modal">
          <div className="content">
            <div className="top-section">
              <div className="title">{accident.location}</div>
              <div className="date">{accident.date}</div>
            </div>
            <div className="middle-section">
              <span>{accident.patientName}</span>, {accident.license_no}
            </div>
            <div className="button-section">{this.getServedBtn(accident)}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ambulance: state.ambulance,
});

export default connect(mapStateToProps, {
  updateAccident,
  getAmbulances,
  updateAmbulance,
})(AlertPopup);
