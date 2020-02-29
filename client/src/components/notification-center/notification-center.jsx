import React, { Component } from "react";
import "./notification-center.css";

import chevronUpIcon from "../../assert/chevron-up-icon.png";
import chevronDownIcon from "../../assert/chevron-down-icon.png";

class NotificationCenter extends Component {
  state = {
    noticicationCenterVisible: false,
    firstClick: false
  };

  getNotificationCenterClasses = status => {
    const firstClick = this.state.firstClick;
    if (!firstClick) {
      return "notification-center";
    } else if (firstClick && !status) {
      return "notification-center-contract";
    } else if (firstClick && status) {
      return "notification-center-expand";
    }
  };

  handleNotificationCenterToggle = () => {
    let firstClick = this.state.firstClick;
    if (!firstClick) {
      firstClick = true;
    }

    let noticicationCenterVisible = this.state.noticicationCenterVisible;
    noticicationCenterVisible = !noticicationCenterVisible;

    this.setState({ noticicationCenterVisible, firstClick });
  };

  getNotificationCenterContent = () => {
    const accidents = this.props.accidents;
    if (accidents.length === 0) {
      return null;
    } else {
      return (
        <React.Fragment>
          {accidents.map(accident => (
            <div key={accident.id} className="notification-item">
              <div
                className="text-section"
                onClick={() =>
                  this.props.handleNotificationItemClick(accident)
                }>
                <div className="top-section">
                  <div>{accident.location}</div>
                  <div>{accident.date}</div>
                </div>
                <div className="middle-section">
                  <div>{accident.patientName}</div>
                  <div>{accident.license_no}</div>
                </div>
              </div>
              <div className="btn-section">
                <button
                  onClick={() => this.props.handleServedBtnClick(accident.id)}>
                  Done
                </button>
              </div>
            </div>
          ))}
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <div
        className={this.getNotificationCenterClasses(
          this.state.noticicationCenterVisible
        )}>
        <div className="top-bar" onClick={this.handleNotificationCenterToggle}>
          <div className="title">
            Notification({this.props.accidents.length})
          </div>
          <button
            className="openCloseBtn"
            onClick={this.handleNotificationCenterToggle}>
            <img
              src={
                this.state.noticicationCenterVisible
                  ? chevronDownIcon
                  : chevronUpIcon
              }
              alt=""
            />
          </button>
        </div>
        <div className="content-section">
          {this.getNotificationCenterContent()}
        </div>
      </div>
    );
  }
}

export default NotificationCenter;
