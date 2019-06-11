import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import Timeline from './Timeline';


const TimelineEvent = (props) => {
  let time = <Timestamp time= {props.timeStamp} />

  return(
    
    <section>
      <li>
        <p className="event-style">{props.person}</p>
        <p className="event-style">{props.status}</p>
        <p className="event-style">{time}</p>

      </li>
    </section>
  );
}

export default TimelineEvent;
