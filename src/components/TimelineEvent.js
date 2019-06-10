import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // Fill in your code here
  return(
    <div className="timeline-event">
      <p className="event-person">
        {props.name}
      </p>
      <p className="event-status">
        {props.status}
      </p>
      <p className="event-timestamp">
        {props.timestamp}
      </p>
    </div>
  );
}

export default TimelineEvent;
