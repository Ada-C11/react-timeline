import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = () => {
  render() {
    const person = this.props.person;
    const timeStamp = this.props.timeStamp;
    const status = this.props.status;


    return (	    
      <section className="timeline">	      
        <p className="event-person">{person}</p>
        <p className="event-time">{timeStamp}</p>
        <p className="event-status">{status}</p>
      </section> 
    );
}}

export default TimelineEvent;
