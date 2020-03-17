import React, { Component } from "react";
import "./App.css";
import RecordList from "./components/record-list";
import AlertPopup from "./components/alert-popup";
import NotificationCenter from "./components/notification-center/notification-center";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  state = {
    accidents: [],
    inputField: [
      { id: 1, name: "Accident id", value: 0 },
      { id: 2, name: "Served", value: 0 }
    ],
    clickedAccident: {}
  };

  componentDidMount() {
    // this.getAllAccidents();
  }

  // getAllAccidents = _ => {};

  getAllServedAccidents = _ => {
    let allAccidents = this.state.accidents;

    allAccidents = allAccidents.filter(accident => accident.served === 1);
    allAccidents = allAccidents.sort((a, b) => (a.date < b.date ? 1 : -1));

    let servedAccidents = allAccidents.map(accident => {
      let formatedAccident = {};

      formatedAccident.id = accident.id;
      formatedAccident.patientName = accident.name;
      formatedAccident.date = accident.date;

      formatedAccident.descript = [
        {
          key: 0,
          title: "License no.",
          text: accident.license_no
        },
        {
          key: 1,
          title: "Medical condition",
          text: accident.medical_cond
        },
        {
          key: 2,
          title: "Location",
          text: accident.location
        }
      ];
      return formatedAccident;
    });

    return servedAccidents;
  };

  getAllUnServedAccidents = _ => {
    let allAccidents = this.state.accidents;

    allAccidents = allAccidents.filter(accident => accident.served === 0);
    allAccidents = allAccidents.sort((a, b) => (a.date < b.date ? 1 : -1));

    let servedAccidents = allAccidents.map(accident => {
      let formatedAccident = {};

      formatedAccident.id = accident.id;
      formatedAccident.patientName = accident.name;
      formatedAccident.date = accident.date;
      formatedAccident.license_no = accident.license_no;
      formatedAccident.location = accident.location;

      return formatedAccident;
    });

    return servedAccidents;
  };

  handleInputValueChange = env => {
    let inputField = this.state.inputField;
    inputField.map(field => {
      if (field.name === env.target.name) {
        field.value = env.target.value;
      }
      return field;
    });

    this.setState({
      inputField
    });
  };

  handleServedBtnClick = accident_id => {};

  handleNotificationItemClick = clickAccident => {
    this.setState({ clickedAccident: clickAccident });
  };

  handleAlertBoxClose = () => {
    this.setState({
      clickedAccident: {}
    });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <nav>Post Crash Help</nav>
          <main>
            <div className="listTitle">All accidents</div>
            <RecordList />
            {/* <RecordList accidents={this.getAllServedAccidents()} /> */}
          </main>

          <NotificationCenter
            accidents={this.getAllUnServedAccidents()}
            handleNotificationItemClick={this.handleNotificationItemClick}
            handleServedBtnClick={this.handleServedBtnClick}
          />
          {Object.entries(this.state.clickedAccident).length === 0 ? null : (
            <AlertPopup
              accident={this.state.clickedAccident}
              handleAlertBoxClose={this.handleAlertBoxClose}
              handleServedBtnClick={this.handleServedBtnClick}
            />
          )}
        </div>
      </Provider>
    );
  }
}

export default App;
