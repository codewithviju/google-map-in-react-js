import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const style = {
  width: "100%",
  height: "100%",
};
class App extends Component {
  render() {
    return (
      <>
        <Map
          initialCenter={{
            lat: 22.17407,
            lng: 71.666328,
          }}
          google={this.props.google}
          zoom={14}
          containerStyle={style}
        />
        ;
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "your-api-key",
})(App);
