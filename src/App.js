import React, { Component } from 'react';

import './App.css';

class App extends Component {

    constructor(){
      super()
      this.state = Array(16).fill(null)
    }


  render() {
    return (
      <div className="board">
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row">
        <button className="move">Here</button>
        <button className="move">Here</button>
        <button className="move">Here</button>
        <button className="move">Here</button>
        </div>
      </div>
    );
  }
}

export default App;
