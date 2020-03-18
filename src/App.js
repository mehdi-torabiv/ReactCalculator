import React, { Component } from 'react';
import "./App.css";
import Button from './Components/Button';
import Monitor from './Components/Monitor'
class App extends Component {
  render() {
    return (
      <div>
        <h1>Create Claculator with react</h1>
        <div className="App">
          <div className="calcWrapper">
            <div className="row">
              <Button name="1">1</Button>
              <Button name="2">2</Button>
              <Button name="3">3</Button>
              <Button name="-">-</Button>
            </div>
            <div className="row">
              <Button name="4">4</Button>
              <Button name="5">5</Button>
              <Button name="6">6</Button>
              <Button name="+">+</Button>
            </div>
            <div className="row">
              <Button name="7">7</Button>
              <Button name="8">8</Button>
              <Button name="9">9</Button>
              <Button name="/">/</Button>
            </div>
            <div className="row">
              <Button name="7">.</Button>
              <Button name="8">0</Button>
              <Button name="9">=</Button>
              <Button name="/">*</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;