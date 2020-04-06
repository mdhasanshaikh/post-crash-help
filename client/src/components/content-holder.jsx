import React, { Component } from "react";

import { connect } from "react-redux";
import { getAccidents } from "../actions/accidentActions";
import { getUsers } from "../actions/userActions";
import PropTypes from "prop-types";

import RecordList from "./record-list/record-list";
import AlertPopup from "./accident-alert/alert-popup";
import NotificationCenter from "../components/notification-center/notification-center";

class ContentHolder extends Component {
  state = {
    accident: {
      accidents: [],
    },
    user: {},
    clickedAccident: {},
  };

  static propTypes = {
    getAccidents: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    accident: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  };

  componentWillMount = async () => {
    await this.props.getAccidents();
    await this.props.getUsers();
  };

  getServedAccidents = (serve, accidents, users) => {
    if (accidents.length) {
      accidents = accidents.filter((accident) => accident.serve === serve);

      let allAccidents = [];
      accidents.map((accident) => {
        return users.map((user) => {
          if (user.vehicle_id === accident.vehicle_id) {
            let formatedAccident = {};
            formatedAccident.id = accident._id;
            formatedAccident.patientName = user.name;
            formatedAccident.descript = [
              {
                key: 0,
                title: "Vehicle no.",
                text: accident.vehicle_id,
              },
              {
                key: 1,
                title: "Medical condition",
                text: user.medical_condition,
              },
              {
                key: 2,
                title: "Blood Group",
                text: user.blood_grp,
              },
              {
                key: 3,
                title: "Location",
                text: "Open Google Map",
                coordinates: accident.latitude + ", " + accident.longitude,
              },
            ];
            allAccidents.push(formatedAccident);
          }
        });
      });
      return allAccidents;
    }
    return [];
  };

  getUnServedAccidents = (serve, accidents, users) => {
    if (accidents.length) {
      accidents = accidents.filter((accident) => accident.serve === serve);

      let allAccidents = [];
      accidents.map((accident) => {
        return users.map((user) => {
          if (user.vehicle_id === accident.vehicle_id) {
            let formatedAccident = {};

            formatedAccident.id = accident._id;
            formatedAccident.patientName = user.name;
            formatedAccident.vehicle_no = user.vehicle_id;
            formatedAccident.location =
              "Location(" + accident.latitude + ", " + accident.longitude + ")";
            formatedAccident.lat = parseFloat(accident.latitude);
            formatedAccident.lng = parseFloat(accident.longitude);

            allAccidents.push(formatedAccident);
          }
        });
      });
      return allAccidents;
    }
    return [];
  };

  handleNotificationItemClick = (clickAccident) => {
    console.log(clickAccident);
    this.setState({ clickedAccident: clickAccident });
  };

  handleAlertBoxClose = () => {
    this.setState({
      clickedAccident: {},
    });
  };

  render() {
    return (
      <React.Fragment>
        <main>
          <div className="listTitle">All accidents</div>
          <RecordList
            accidents={this.getServedAccidents(
              true,
              this.props.accident.accidents,
              this.props.user.users
            )}
          />
        </main>
        <NotificationCenter
          accidents={this.getUnServedAccidents(
            false,
            this.props.accident.accidents,
            this.props.user.users
          )}
          handleItemClick={this.handleNotificationItemClick}
        />
        {Object.entries(this.state.clickedAccident).length === 0 ? null : (
          <AlertPopup
            accident={this.state.clickedAccident}
            handleAlertBoxClose={this.handleAlertBoxClose}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  accident: state.accident,
  user: state.user,
});

export default connect(mapStateToProps, {
  getAccidents,
  getUsers,
})(ContentHolder);
