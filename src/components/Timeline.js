import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const timelineEvents = props.events

  const timelineEventComponents = timelineEvents.map ((timelineEvent, i) => {
    return (
      <div key={i} >
        <TimelineEvent 
          person={timelineEvent.person} 
          timestamp={timelineEvent.timestamp} 
          status={timelineEvent.status} />
      </div>
    );
  });
 
  return (
    <div className='timeline'>
      {timelineEventComponents}
    </div>
  );
}

export default Timeline;
