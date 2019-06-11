import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <section class="timeline-event">
      <h4 class="event-person">{props.person}</h4>
      <p class="event-status">{props.status}</p>
      <p class="event-time"><Timestamp time={props.timestamp} /></p>
    </section>
  );
}

export default TimelineEvent;
