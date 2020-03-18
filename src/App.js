import React, { Component } from 'react';
import "./App.css";
import Button from './Components/Button';
import Monitor from './Components/Monitor';
import * as math from 'mathjs';
import ClearButton from './Components/ClearButton'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    }
  }
  addToInput = val => {
    console.log(this.state.input);
    this.setState({ input: this.state.input + val });
  };
  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  }
  render() {
    return (
      <div>
        <h1>Create Claculator with react</h1>
        <div className="App">
          <div className="calcWrapper">
            <Monitor input={this.state.input} />
            <div className="row">
              <Button name="1" handleClick={this.addToInput}>1</Button>
              <Button name="2" handleClick={this.addToInput}>2</Button>
              <Button name="3" handleClick={this.addToInput}>3</Button>
              <Button name="-" handleClick={this.addToInput}>-</Button>
            </div>
            <div className="row">
              <Button name="4" handleClick={this.addToInput}>4</Button>
              <Button name="5" handleClick={this.addToInput}>5</Button>
              <Button name="6" handleClick={this.addToInput}>6</Button>
              <Button name="+" handleClick={this.addToInput}>+</Button>
            </div>
            <div className="row">
              <Button name="7" handleClick={this.addToInput}>7</Button>
              <Button name="8" handleClick={this.addToInput}>8</Button>
              <Button name="9" handleClick={this.addToInput}>9</Button>
              <Button name="/" handleClick={this.addToInput}>/</Button>
            </div>
            <div className="row">
              <Button name="7" handleClick={this.addToInput}>.</Button>
              <Button name="8" handleClick={this.addToInput}>0</Button>
              <Button name="9" handleClick={() => this.handleEqual()}>=</Button>
              <Button name="/" handleClick={this.addToInput}>*</Button>
            </div>
            <div className="row">
              <ClearButton handleClear={() => this.setState({ input: '' })}>Clear</ClearButton>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;