import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    let deadline = new Date("April 15, 2019 12:00:00").getTime();
    let timer = setInterval(function() {
      let now = new Date().getTime();
      let t = deadline - now;
      if (t >= 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Countdown</h1>
        </header>
        <main />
      </div>
    );
  }
}

export default App;
