import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // Fill in your code here
  return (
    <section>

    {/* <h3>{ props.timestamp } </h3> */}
      <h3> <Timestamp time= { props.time }/></h3>
      {/* so, note to self, it has to match the name time on Timestamp */}
    <h3>
      { props.person } , { props.status}
    </h3>
  </section>
  );
}

export default TimelineEvent;
