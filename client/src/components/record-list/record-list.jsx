import React, { Component } from "react";
import "./record-list.css";
import Card from "./components/card";

class RecordList extends Component {
  state = {};

  
  render() {
    const records = this.props.accidents;
    return (
      <div className="record-list">
        {records.map(record => (
          <Card key={record.id} content={record} />
        ))}
      </div>
    );
  }
}

export default RecordList;
