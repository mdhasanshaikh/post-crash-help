import React, { Component } from "react";
import Card from "./card";

class RecordList extends Component {
  state = {};
  render() {
    const records = this.props.accidents;
    return records.map(record => {
      return <Card key={record.id} content={record} />;
    });
  }
}

export default RecordList;
