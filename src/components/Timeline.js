import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = events => {
  const TimelineEvents = events.events.map(eventObject => {
    return (
      <li>
        <TimelineEvent
          person={eventObject.person}
          status={eventObject.status}
          time={eventObject.time}
        />
      </li>
    );
  });
  return <ul className="Timeline">{TimelineEvents}</ul>;
};

export default Timeline;
