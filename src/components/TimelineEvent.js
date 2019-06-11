import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
  <section>
    <h3>{props.person}</h3>
    <h4>{props.status}</h4>
    <p><Timestamp time={props.timestamp}/></p>
  </section>
  );
}

export default TimelineEvent;
