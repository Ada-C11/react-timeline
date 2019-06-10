import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  console.log(props);
  const individualEvent = props.events.map( (event, i) => {
    return (
      <p key={i}><TimelineEvent person={event.person} status={event.status} timestamp={event.timeStamp} /></p>
    );
  })

  return (
    <section className="timeline">
      { individualEvent }
    </section>
  );
}

export default Timeline;
