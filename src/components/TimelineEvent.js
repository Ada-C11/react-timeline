import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = () => {
  return (
    <section>
      <p>{person}</p>
      <Timestamp />
      <p>{status}</p>
    </section>
  );
}

export default TimelineEvent;
