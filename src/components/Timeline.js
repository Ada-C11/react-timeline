import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  // props is an array of "events" which are JS objects from timeline.json 
  const timelineComponents = props.items.map((event, i) => {
    // why do we need .events again ^ here? 
    return (
      <TimelineEvent 
      key = {i}
      person={event.person} 
      status={event.status} 
      time={event.timeStamp} />
    );
  });
  return(
    <section className="timeline">{timelineComponents}</section>
  );
}

export default Timeline;
