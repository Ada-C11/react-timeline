import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


const Timeline = (props) => {

  const timelineComponents = props.events.map((timeline, i) => {
    return (
      <TimelineEvent
        key={i}
        person={timeline.person}
        status={timeline.status}
        timestamp={timeline.timeStamp}
        />
    )
  });
  return (
    <section>
      <ul>
        {timelineComponents}
      </ul>
    </section>
  )
}

export default Timeline;
