import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // Fill in your code here
  // const time = props.time
  return(
    <section className="timeline-event">
      <div className="event-person">
        {props.person}
      </div>
      <div className="event-status">
        {props.status}
      </div>
      <div className="event-timestamp">
        <Timestamp time={props.time} />
      </div>
    </section>
  );
}

export default TimelineEvent;
