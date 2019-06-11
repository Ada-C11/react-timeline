import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
 
  return(
  <article class="timeline-event">
    <p class="event-person">{props.person}</p>
    <p class="event-status">{props.status}</p>
    <p class="event-time"><Timestamp time={props.time} /></p>
  </article>
  );
}

export default TimelineEvent;
