import React, { Component } from 'react';
import "./DateBox.scss";

class DateBox extends Component {
    render() { 
        const { days, textdays, hours, texthours, minutes, textminutes, seconds, textseconds } = this.props;
        return ( 
            <div>
            <h2>{days}{hours}{minutes}{seconds}</h2>
            <h2>{textdays}{texthours}{textminutes}{textseconds}</h2>
            </div>
         );
    }
}
 
export default DateBox;