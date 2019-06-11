import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  return (
    <section>
      <h4>
        {props.person}
      </h4>
      <p> {props.timeStamp}</p>
      <p> {props.status}</p>
    </section>
  );
}

export default Timeline;
