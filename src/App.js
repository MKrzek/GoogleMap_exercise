import React, { Component } from 'react';



class App extends Component {

  getInitialState(){
    let favourites=[];
    if (localStorage.favourites){
      favourites=JSON.parse(localStorage.favourites)
    }
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
