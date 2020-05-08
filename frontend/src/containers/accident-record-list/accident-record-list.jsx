import React, { Component } from "react";
import "./accident-record-list.css";
import Card from "../../components/view/accident-card/accident-card";

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
