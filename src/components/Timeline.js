import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const events = props.events.map((event, i) => {
    return (

      <TimelineEvent key={i}
        person={event.person}
        status={event.status}
        timestamp={event.timeStamp} />

    );
  });

  return (
    <section className="timeline">
      { events }
    </section>
  );
}

export default Timeline;
