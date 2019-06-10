import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const events = props.events

  const TimelineEventComponents = events.map( (event, i) => {
    return (
      <li key={i}>
        <TimelineEvent 
          person={ event.person }
          status={ event.status }
          timeStamp={ event.timeStamp }/>
      </li>
    );
  });

  return (
    <section>
    <ul>
      { TimelineEventComponents }
    </ul>
  </section>
  );
}

export default Timeline;