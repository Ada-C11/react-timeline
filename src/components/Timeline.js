import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  // although why do we have to do props.events? cause itsnt 
  // <Timeline events={timelineData.events} /> already sending it events?
  // side question, how would you debug that?

  const timelineComponents = props.events.map( (timeline, i) => {
    return (
      <li className="timeline" key={i}>
        <TimelineEvent
          person={ timeline.person }
          status={ timeline.status }
          time={ timeline.timeStamp } />
      </li>
    );
  });
  
    return (
      <section >
        <ul>
          { timelineComponents }
        </ul>
      </section>
    );
  };




export default Timeline;
