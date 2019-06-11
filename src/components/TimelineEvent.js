import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {


  return (
    <section className='timeline-event'>
      <div className='event-person'>
        <img className='avatar' src={props.photo} alt='avatar' />
        <h3> {props.person} </h3>
      </div>
      <p className='event-time' > 
        <Timestamp time={props.timestamp} />
      </p>
      <p className='event-status' > {props.status} </p>
      <div className="status-interactions">
        <a href="https://en.wikipedia.org/wiki/Nicolas_Cage">Like</a>
        <a href="https://en.wikipedia.org/wiki/Nicolas_Cage">Comment</a>
        <a href="https://en.wikipedia.org/wiki/Nicolas_Cage">Share</a>
      </div>
    </section>
  );
};

export default TimelineEvent;
