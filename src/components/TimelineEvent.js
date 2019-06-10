import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <section class="timeline-event">
      <span><strong>{ props.person }</strong></span>
      <span><Timestamp time={ props.timeStamp } /></span>
      <p>
        { props.status }
      </p>
    </section>
  );
}

export default TimelineEvent;
