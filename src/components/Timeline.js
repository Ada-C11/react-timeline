import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


const Timeline = (props) => {

  return(
    <div className='timeline'>
      <TimelineEvent status={props.event.status} person={props.event.person} timeStamp={props.event.timeStamp}/>
    </div>
  );
}

export default Timeline;
