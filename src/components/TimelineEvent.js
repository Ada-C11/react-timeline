import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div className="TimelineEvent">
      <header className="Student-header">
        <p>{props.person}</p>
        <p>{props.status}</p>
        <p><Timestamp /></p>
      </header>
    </div>
  );
}

export default TimelineEvent;