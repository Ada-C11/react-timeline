import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const timelineComponents = props.events.map((event, i) => {
    return (
      <li key={i}>
        <TimelineEvent 
          person={ event.person } 
          timestamp={ event.timeStamp } 
          status={ event.status } 
        />
      </li>
    );
  });

  return (
    <section>
        <ul>
            {timelineComponents}
        </ul>
    </section>
  );
}

export default Timeline;
