import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  return(
    <section className="timeline-event">
      <h3 className="event-person">{props.name}</h3>
      <p className="event-status">{props.status}</p>
      <Timestamp time={props.timeStamp}/>
    </section>
  )
}

export default TimelineEvent;
