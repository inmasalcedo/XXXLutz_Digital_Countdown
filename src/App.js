import React, { Component } from "react";
import "./App.scss";
import DateBox from "./Components/DateBox";
import { withTranslation } from 'react-i18next';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    let deadline = new Date("December 25, 2019 12:00:00").getTime();
    setInterval(() => {
      let now = new Date().getTime();
      let t = deadline - now;
      if (t >= 0) {
        let datayears = Math.floor(t / (1000 * 60 * 60 * 24 * 30 * 12));
        let datamonths = Math.floor(t / (1000 * 60 * 60 * 24 * 30));
        let datadays = Math.floor(t / (1000 * 60 * 60 * 24));
        let datahours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let datamins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let datasecs = Math.floor((t % (1000 * 60)) / 1000); 
        this.setState({
          currentTime: now,
          years: datayears,
          months: datamonths,
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
    const { days, hours, minutes, seconds, } = this.state;
    const { t } = this.props;
    return (
      <div className="app">
        <header className="header--container">
          <h1>{ t('Countdown') }</h1>
        </header>
        <main className="main--container">
          <DateBox days={days} textdays={t("Days")}/>
          <DateBox hours={hours} texthours={t("Hours")}/>
          <DateBox minutes={minutes} textminutes={t("Minutes")}/>
          <DateBox seconds={seconds} textseconds={t("Seconds")}/>
        </main>
      </div>
    );
  }
}

export default withTranslation('common')(App);
