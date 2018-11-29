import React, { Component } from 'react';
import Square from './Square';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = { fullSquares: [[],[],[],[]], isRedNext: false };
    
  }

  handleClick = (buttonNum) => {
    console.log(`Clicked ${buttonNum}`)
    const tempGameBoard = this.state.fullSquares.map((row) => row );

    this.state.isRedNext ? tempGameBoard[buttonNum].push("blue") : tempGameBoard[buttonNum].push("red");
    this.setState({fullSquares: tempGameBoard})
    this.setState({isRedNext:!this.state.isRedNext})
  }

  



  render() {
    
    return <div className="board">
        <div className="row">
        <Square color={this.state.fullSquares[0][3]} />
        <Square color={this.state.fullSquares[1][3]} />
        <Square color={this.state.fullSquares[2][3]} />
        <Square color={this.state.fullSquares[3][3]} />
        </div>
        <div className="row">
        <Square color={this.state.fullSquares[0][2]} />
        <Square color={this.state.fullSquares[1][2]} />
        <Square color={this.state.fullSquares[2][2]} />
        <Square color={this.state.fullSquares[3][2]} />
        </div>
        <div className="row">
        <Square color={this.state.fullSquares[0][1]} />
        <Square color={this.state.fullSquares[1][1]} />
        <Square color={this.state.fullSquares[2][1]} />
        <Square color={this.state.fullSquares[3][1]} />
        </div>
        <div className="row">
          <Square color={this.state.fullSquares[0][0]} />
          <Square color={this.state.fullSquares[1][0]} />
          <Square color={this.state.fullSquares[2][0]} />
          <Square color={this.state.fullSquares[3][0]} />
        </div>
        <div className="row">
          <button className="move" onClick={() => this.handleClick(0)}>
            Here
          </button>
          <button className="move" onClick={() => this.handleClick(1)}>
            Here
          </button>
          <button className="move" onClick={() => this.handleClick(2)}>
            Here
          </button>
          <button className="move" onClick={() => this.handleClick(3)}>
            Here
          </button>
        </div>
      </div>;
  }
}

export default App;
