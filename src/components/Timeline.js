import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineObjects = props.events.map((timeline, i) => {
    return (
      <TimelineEvent
      key={i}
      person={timeline.person}
      status={timeline.status}
      tiemstamp={timeline.timestamp}
      />
    )
  });
  return (
    <section>
    <ul>
    {timelineObjects}
    </ul>
    </section>
  )
}

export default Timeline;
