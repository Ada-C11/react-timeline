import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';



const Timeline = (props) => {
  const mappedTimeline = props.eventProps.map((event, index) => {
    return (
      <li key={index}>
    
        <TimelineEvent person={event.person}
          status={event.status}
          timeStamp={event.timeStamp}
        />
      </li>
    );
  });
  return (
    <section>
      {mappedTimeline}
    </section>
  );
}

export default Timeline;
