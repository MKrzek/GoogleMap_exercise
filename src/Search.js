import React from "react";
//const google = window.google;

/*global google*/
export default class Search extends React.Component {
  constructor(props) {
    super(props);
      this.state = { val: "" };
    };
    handleChange=(event)=> {
      this.setState({ val: event.target.value });
    };

  handleClick = event => {
      const geocoder = new google.maps.Geocoder();
      console.log ('geocoder', geocoder)
      console.log ('props map', this.props.map)
    this.geocodeAddress(geocoder, this.props.map);
  };
  geocodeAddress(geocoder, resultsMap){
    let address = this.state.val
    geocoder.geocode({ address: address }, function(results, status) {
      if (status === "OK") {
          console.log ('results', results)
        resultsMap.setCenter(results[0].geometry.location);
        console.log ('results detale', results[0].geometry.location)

        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  };
  render() {
    return (
      <div id="floating-panel">
        <input
          id="address"
          value={this.state.val}
          onChange={this.handleChange}
        />
        <button id="submit" onClick={this.handleClick}>
          Submit
        </button>
      </div>
    );
  }
}
