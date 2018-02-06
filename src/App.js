import React from "react";
import "./index.css";
import Search from "./Search.js";
import Map from "./Map.js";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Map />
      </div>
    );
  }
}
