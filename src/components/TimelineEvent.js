import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  let time = <Timestamp time={new Date} />

  return(
    <section>
      <h3>
        <strong>
          {props.person}
        </strong>
      </h3>
      <h3>
        <strong>
          {time}
        </strong>
      </h3>
      <h3>
        {props.status}
      </h3>
    </section>
  );
}

export default TimelineEvent;
