import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <section>
      <h3>
        {props.person}
      </h3>
      <p>
        {props.status}
      </p>
      <h5>
        <Timestamp />
      </h5>
    </section>
  );
}

export default TimelineEvent;
