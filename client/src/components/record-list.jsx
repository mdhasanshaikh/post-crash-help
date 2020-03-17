import React, { Component } from "react";
import Card from "./card";

import { connect } from "react-redux";
import { getAccidents, updateAccident } from "../actions/accidentActions";
import PropTypes from "prop-types";

class RecordList extends Component {
  componentDidMount() {
    this.props.getAccidents();
  }
  state = {};
  render() {
    return <div />;
    // const records = this.props.accidents;
    // return records.map(record => {
    //   return <Card key={record.id} content={record} />;
    // });
  }
}

RecordList.propTypes = {
  getAccidents: PropTypes.func.isRequired,
  accident: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  accident: state.accident
});

export default connect(mapStateToProps, { getAccidents, updateAccident })(
  RecordList
);
