import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <section>
      <h4>
        {props.person}
      </h4>
      <p>
        <Timestamp 
          time={props.timeStamp}
        />
      </p>
      <p> {props.status}</p>
    </section>
  );
}

export default TimelineEvent;
