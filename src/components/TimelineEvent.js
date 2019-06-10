import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <section class="timeline timeline-event">
      <span class="event-person">{ props.person }</span>
      <span class="event-time"><Timestamp time={ props.timeStamp } /></span>
      <p class="event-status">
        { props.status }
      </p>
    </section>
  );
}

export default TimelineEvent;
