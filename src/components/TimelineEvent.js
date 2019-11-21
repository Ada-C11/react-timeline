import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <section className="timeline-event">
      <h3 className="event-person">
        {props.person}
      </h3>
      <p className="event-status">
        {props.status}
      </p>
      <h5 className="event-time">
        <Timestamp time={props.timestamp}/>
      </h5>
    </section>
  );
}

export default TimelineEvent;
