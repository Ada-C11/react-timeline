import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const personTimestamp = (props) => {
  return (
    <Timestamp time={ props } />
  );
};

const TimelineEvent = (props) => {
  return (
    <section>
      <h3>
        Person: { props.person }
      </h3>
      <p>
        Status: { props.status}
      </p>
      <p>
        Timestamp: { personTimestamp(props.timeStamp) }
      </p>
    </section>
  );
};

export default TimelineEvent;
