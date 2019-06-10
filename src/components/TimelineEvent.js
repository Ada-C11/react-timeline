import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = prop => {
  return (
    <section className="timeline-event">
      <div className="event-person ">
        <h1>{prop.person}</h1>
      </div>
      <div className="event-status ">
        <p>{prop.status}</p>
      </div>
      <div className="event-time ">
        <Timestamp time={prop.time} />
      </div>
    </section>
  );
};

export default TimelineEvent;
