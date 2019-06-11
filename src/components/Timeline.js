import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
// testing
const Timeline = (props) => {
  const eventComponents = props.events.map((event, i) => {
    return (
        <TimelineEvent
          person={event.person}
          status={event.status}
          timestamp={event.timeStamp} />
    );
  });

  return (
    <section class="timeline">
        {eventComponents}
    </section>
  );
}

export default Timeline;

