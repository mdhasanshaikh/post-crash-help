import React, { Component } from "react";
import "./notification-center.css";

import chevronUpIcon from "../../assert/chevron-up-icon.png";
import chevronDownIcon from "../../assert/chevron-down-icon.png";

import { connect } from "react-redux";
import { updateAccident } from "../../actions/accidentActions";
import PropTypes from "prop-types";

import * as Styled from "./styles";

class NotificationCenter extends Component {
  state = {
    noticicationCenterVisible: null,
    firstClick: false
  };

  static propTypes = {
    updateAccident: PropTypes.func.isRequired
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

  handleServedBtnClick = async accidentId => {
    await this.props.updateAccident(accidentId);
  };

  getNotificationCenterContent = () => {
    const accidents = this.props.accidents;

    if (accidents.length === 0) {
      return null;
    } else {
      return (
        <Styled.ContentSection>
          {accidents.map(accident => (
            <Styled.Item key={accident.id}>
              <Styled.TextSection>
                <Styled.TextSectionFirstRow>
                  {accident.location}
                </Styled.TextSectionFirstRow>
                <Styled.TextSectionSecondRow>
                  <div>{accident.patientName}</div>
                  <div>{accident.vehicle_no}</div>
                </Styled.TextSectionSecondRow>
              </Styled.TextSection>
              <Styled.BtnSection>
                <Styled.ServeBtn
                  onClick={() => this.handleServedBtnClick(accident.id)}>
                  Serve
                </Styled.ServeBtn>
              </Styled.BtnSection>
            </Styled.Item>
          ))}
        </Styled.ContentSection>
        // <React.Fragment>
        //   {accidents.map(accident => (
        //     <div key={accident.id} className="notification-item">
        //       <div
        //         className="text-section"
        //         onClick={() => this.props.handleItemClick(accident)}>
        //         <div className="top-section">
        //           <div>{accident.location}</div>
        //           {/* <div>{accident.date}</div> */}
        //         </div>
        //         <div className="middle-section">
        //           <div>{accident.patientName}</div>
        //           <div>{accident.vehicle_no}</div>
        //         </div>
        //       </div>
        //       <div className="btn-section">
        //         <button onClick={() => this.handleServedBtnClick(accident.id)}>
        //           Done
        //         </button>
        //       </div>
        //     </div>
        //   ))}
        // </React.Fragment>
      );
    }
  };

  render() {
    const props = {
      isOpen: this.state.noticicationCenterVisible,
      count: this.props.accidents.length
    };

    return (
      <Styled.NotificationCenterBox {...props}>
        <Styled.Topbar onClick={this.handleNotificationCenterToggle}>
          <Styled.Title>
            Notification({this.props.accidents.length})
          </Styled.Title>
          <Styled.ButtonIcon
            {...props}
            src={
              this.state.noticicationCenterVisible
                ? chevronUpIcon
                : chevronDownIcon
            }
          />
        </Styled.Topbar>
        {this.getNotificationCenterContent()}
      </Styled.NotificationCenterBox>
      // <div
      //   className={this.getNotificationCenterClasses(
      //     this.state.noticicationCenterVisible
      //   )}>
      //   <div className="top-bar" onClick={this.handleNotificationCenterToggle}>
      //     <div className="title">
      //       Notification({this.props.accidents.length})
      //     </div>
      //     <button
      //       className="openCloseBtn"
      //       onClick={this.handleNotificationCenterToggle}>
      //       <img
      //         src={
      //           this.state.noticicationCenterVisible
      //             ? chevronDownIcon
      //             : chevronUpIcon
      //         }
      //         alt=""
      //       />
      //     </button>
      //   </div>
      //   <div className="content-section">
      //     {this.getNotificationCenterContent()}
      //   </div>
      // </div>
    );
  }
}

export default connect(null, { updateAccident })(NotificationCenter);
