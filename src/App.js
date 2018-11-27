import React, { Component } from 'react';
import Square from './Square';
import './App.css';

class App extends Component {
  state = {
    squares: [],
    isRedNext:false
  }

    handleClick = () => {
      if(this.state.isRedNext){
        this.setState({squares:this.state.squares.concat(['blue'])})
        this.setState({isRedNext:!this.state.isRedNext})
      }
      else {
        this.setState({squares:this.state.squares.concat(['red'])})
        this.setState({isRedNext:!this.state.isRedNext})
      }
    }

    renderSquare = (i) => (
      <Square color={this.state.squares[i]}/>
    )


  render() {
    return (
      <div className="board">


        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
        <div className="row">
        <button className="move" onClick={this.handleClick}>Here</button>
        <button className="move" onClick={this.handleClick}>Here</button>
        <button className="move" onClick={this.handleClick}>Here</button>
        <button className="move" onClick={this.handleClick}>Here</button>
        </div>
      </div>
    );
  }
}

export default App;
