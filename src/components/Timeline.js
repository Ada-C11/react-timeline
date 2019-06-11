import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  // props is an array of "events" which are JS objects from timeline.json 
  const timelineComponents = props.events.map((event, i) => {
    // why do we need .events again ^ here? 
    return (
      <TimelineEvent 
      key = {i}
      person={event.person} 
      status={event.status} 
      time={event.timeStamp} />
      // why does the capital S in timeStamp not need to be in caps to work?
    );
  });
  return(
    <section class="timeline">{timelineComponents}</section>
  );
}

export default Timeline;
