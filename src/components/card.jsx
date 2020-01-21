import React, { Component } from "react";
import "./card.css";
import TextWithTitle from "./text-with-title";

class Card extends Component {
  state = {
    textWithTitle: [
      {
        key: 1,
        title: "title 1",
        text: "text 1"
      },
      {
        key: 2,
        title: "title 2",
        text: "text 2"
      },
      {
        key: 3,
        title: "title 3",
        text: "This is written by Lijin Joy"
      }
    ]
  };
  render() {
    return (
      <div className="card">
        <div className="top-section">
          <div className="title">Patient Name</div>
          <div className="date">Date</div>
        </div>
        {this.state.textWithTitle.map(item => {
          return <TextWithTitle key={item.key} content={item} />;
        })}
      </div>
    );
  }
}

export default Card;
