import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <section className="timeline timeline-event">
      <span className="event-person">{ props.person }</span>
      <span className="event-time"><Timestamp time={ props.timeStamp } /></span>
      <p className="event-status">
        { props.status }
      </p>
    </section>
  );
}

export default TimelineEvent;
