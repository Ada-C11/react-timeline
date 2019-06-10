import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  const time = <Timestamp time={ new Date } />

  return(
    <section>
      <h1>{props.person}</h1>
      <h3>{props.status}</h3>
      <h6>{time}</h6>
    </section>
  );
};

export default TimelineEvent;
