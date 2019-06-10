import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <section>
      <p> {props.person} </p>
      <p> <Timestamp time={props.timestamp} /> </p>
      <p> {props.status} </p>
    </section>
  );
}

export default TimelineEvent;
