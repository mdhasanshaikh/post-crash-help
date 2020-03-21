import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import carIcon from "../../../assert/car-icon.png";
import ambulanceIcon from "../../../assert/ambulance-icon.png";

class MapContainer extends Component {
  state = {};
  render() {

    const mapStyles = {
      width: "100%",
      height: "360px",
      float: "left"
    };

    const displayMarkers = () => {
      return this.props.ambulances.map(ambulance => {
        return (
          <Marker
            key={ambulance.id}
            id={ambulance.id}
            name={ambulance.vehicle_no}
            position={{
              lat: ambulance.lat,
              lng: ambulance.lng
            }}
            icon={{
              url: ambulanceIcon,
              anchor: new this.props.google.maps.Point(24, 24),
              scaledSize: new this.props.google.maps.Size(48, 48)
            }}
            onClick={() =>
              console.log(
                `You have clicked ambulance no. ${this.props.accident.id}`
              )
            }
          />
        );
      });
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: this.props.accident.lat,
          lng: this.props.accident.lng
        }}>
        <Marker
          key={this.props.accident.id}
          id={this.props.accident.id}
          name={this.props.accident.vehicle_no}
          position={{
            lat: this.props.accident.lat,
            lng: this.props.accident.lng
          }}
          icon={{
            url: carIcon,
            anchor: new this.props.google.maps.Point(24, 24),
            scaledSize: new this.props.google.maps.Size(48, 48)
          }}
          onClick={() =>
            console.log(
              `You have clicked accident no. ${this.props.accident.id}`
            )
          }
        />
        {displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCE9NRqdC2ZRtLK42pUyEMW7flJJhXouIU"
})(MapContainer);
