import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const events = props.events.map((event, i) => {
    return (
      <TimelineEvent key={i}
        person={event.person}
        status={event.status}
        time={event.timeStamp} />
    );
  });

  return (
    <section>

      {events}

    </section>
  );
}

export default Timeline;
