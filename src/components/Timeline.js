import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import data from '../data/timeline.json';

const Timeline = () => {
  render() {
    const events = data.events;

    const timelineEventComponents = events.map((event) => {
      return (
        <TimelineEvent
          key={event.timeStamp}
          person={event.person}
          status={event.status}
          timeStamp={event.timeStamp}
        />
      );
    });

  return (
    <div className="timeline">{timelineEventComponents}</div>
  );
}}

export default Timeline;
