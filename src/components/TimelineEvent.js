import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  // Fill in your code here
  return (
    <section>

    {/* <h3>{ props.timestamp } </h3> */}

    <h4 className="time"> <Timestamp time= { props.time }/></h4>
      <h3 className="name">{ props.person }</h3>
      {/* so, note to self, it has to match the name time on Timestamp */}
    <h3>
      { props.status}
    </h3>
  </section>
  );
}

export default TimelineEvent;
