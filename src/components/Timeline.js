import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  // props is an array of "events" which are JS objects from timeline.json 
  const timelineComponents = props.events.map((event, i) => {
    return (
      <TimelineEvent 
      key = {i}
      person={event.person} 
      status={event.status} 
      time={event.timeStamp} />
    );
  });
  return(
    <section class="timeline">{timelineComponents}</section>
  );
}

export default Timeline;
