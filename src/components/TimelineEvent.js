import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <section>
      <span><strong>{ props.person }</strong></span>
      <span>{ <Timestamp /> }</span>
      <p>
        { props.status }
      </p>
    </section>
  );
}

export default TimelineEvent;
