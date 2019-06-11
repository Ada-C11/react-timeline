import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


const timelineEventComponents = (events) => {
  return events.map((post, i) => {
      return (
          <TimelineEvent key={i} person={ post.person } status={ post.status } timeStamp={ post.timeStamp } />
          )
      })
}

const Timeline = (props) => {
  return (
    <div className="Timeline">
      { timelineEventComponents(props.events) }
    </div>
  );
}

export default Timeline;