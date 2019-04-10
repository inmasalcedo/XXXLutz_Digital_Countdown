import React, { Component } from 'react';
import propTypes from "prop-types";
import "./DateBox.scss";

class DateBox extends Component {
    render() { 
        const { days, textdays, hours, texthours, minutes, textminutes, seconds, textseconds } = this.props;
        return ( 
            <div className="dateBox--container">
            <h2 className="dateBox--number">{days}{hours}{minutes}{seconds}</h2>
            <h2 className="dateBox--text">{textdays}{texthours}{textminutes}{textseconds}</h2>
            </div>
         );
    }
}
 
export default DateBox;

DateBox.propTypes = {
    days: propTypes.number,
    textdays: propTypes.string,
    hours: propTypes.number,
    texthours: propTypes.string, 
    minutes: propTypes.number,
    textminutes: propTypes.string,
    seconds: propTypes.number, 
    textseconds: propTypes.string
}