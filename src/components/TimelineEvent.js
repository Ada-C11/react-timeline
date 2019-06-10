import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  // const time = <Timestamp time="2018-05-18T22:12:03Z" />


  return(
    <section className="timeline-event">
      <div className="event-person">
        {props.person}
      </div>

      <div className="event-status">
        {props.status}
      </div>

      <div className="event-time">
        <Timestamp time={props.timestamp} />
      </div>

    </section>

  );
}

export default TimelineEvent;
