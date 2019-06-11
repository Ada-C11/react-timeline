import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  const time = <Timestamp time={ props.timeStamp} />

  return(
    <section className='timeline-event'>
      <p className='event-person'>{props.person}</p>
      <p className='event-status'>{props.status}</p>
      <p className='event-time'>{time}</p>
    </section>
  );
};

export default TimelineEvent;
