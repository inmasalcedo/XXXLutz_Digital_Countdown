import React, { Component } from "react";
import "./App.scss";
import DateBox from "./Components/DateBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    };
  }

  componentDidMount() {
    let deadline = new Date("April 15, 2019 12:00:00").getTime();
    setInterval(() => {
      let now = new Date().getTime();
      let t = deadline - now;
      if (t >= 0) {
        let datadays = Math.floor(t / (1000 * 60 * 60 * 24));
        let datahours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let datamins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let datasecs = Math.floor((t % (1000 * 60)) / 1000); 
        this.setState({
          days: datadays,
          hours: datahours,
          minutes: datamins,
          seconds: datasecs,
        });   
        return {
          days: datadays,
          hours: datahours,
          minutes: datamins,
          seconds: datasecs,
        }
      } else {
      }
    });   
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Countdown</h1>
        </header>
        <main>
          <DateBox days={days} textdays="Days"/>
          <DateBox hours={hours} texthours="Hours"/>
          <DateBox minutes={minutes} textminutes="Minutes"/>
          <DateBox seconds={seconds} textseconds="Seconds"/>
        </main>
      </div>
    );
  }
}

export default App;
