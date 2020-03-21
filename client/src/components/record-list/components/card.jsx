import React, { Component } from "react";
import "./card.css";
import TextWithTitle from "./text-with-title";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="top-section">
          <div className="title">{this.props.content.patientName}</div>
          <div className="date">{this.props.content.date}</div>
        </div>
        <div className="content-section">
          {this.props.content.descript.map(item => {
            return <TextWithTitle key={item.key} content={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default Card;
