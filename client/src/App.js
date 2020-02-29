import React, { Component } from "react";
import "./App.css";
import RecordList from "./components/record-list";
import AlertPopup from "./components/alert-popup";
import NotificationCenter from "./components/notification-center/notification-center";

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
    this.getAllAccidents();
  }

  getAllAccidents = _ => {
    // const scope = this;

    fetch("http://localhost:4000/accidents")
      .then(res => res.json())
      .then(res => this.setState({ accidents: res.data }))
      .catch(err => console.log(err));
  };

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

  handleServedBtnClick = accident_id => {
    fetch(
      `http://localhost:4000/accidents/update?accident_id="${accident_id}"&status=${1}`
    )
      .then(this.getAllAccidents)
      .catch(err => console.log(err));

    const clickedAccident = this.state.clickedAccident;

    if (Object.entries(clickedAccident).length !== 0) {
      this.setState({
        clickedAccident: {}
      });
    }
  };

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
      <div className="App">
        <nav>Post Crash Help</nav>
        <main>
          <div className="listTitle">All accidents</div>
          <RecordList accidents={this.getAllServedAccidents()} />
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
    );
  }
}

export default App;
