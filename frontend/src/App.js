import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import ContentHolder from "./containers/content-holder/content-holder";

class App extends Component {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <nav>Post Crash Help</nav>
          <ContentHolder />
        </div>
      </Provider>
    );
  }
}

export default App;
