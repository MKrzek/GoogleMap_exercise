import React from "react";
import "./index.css";
import "./sass/style.scss"
import Search from "./Search.js";
import Map from "./Map.js";
import Fog from "./Fog.js";
import Clouds from './Clouds.js';
import Rain from './Rain.js';
import Snow from './Snow.js';

export default class App extends React.Component {
  render() {
    return (
      <div className='baa'>
        <Search />
        <Map />
        <div>
        {/* <Fog/> */}
        {/* <Clouds/> */}

        {/* <Rain/> */}
        <Snow/>
        </div>
      </div>
    );
  }
}
