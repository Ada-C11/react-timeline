import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  // Fill in your code here

  const allTimelineEvents = props.events.map((timelineEvent,i)=>{
    return (
      <ul key={i}>
        <TimelineEvent
          person={timelineEvent.person}
          status={timelineEvent.status}
          timeStamp={timelineEvent.timeStamp}
          />
      </ul>
    );
  });
  return(
    <section className="timeline">
      {allTimelineEvents}
    </section>
  );
}

export default Timeline;
