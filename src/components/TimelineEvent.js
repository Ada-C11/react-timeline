import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div className="TimelineEvent">
      <header className="Timeline-header">
        <p>{props.person}</p>
        <p>{props.status}</p>
        <p><Timestamp time={props.timeStamp}/></p>
      </header>
    </div>
  );
}

export default TimelineEvent;