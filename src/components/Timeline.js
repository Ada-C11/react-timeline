import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


const Timeline = (props) => {

  const data = [
    {
      person: "Ariana Bray",
      status: "I don't like this",
      timeStamp: "2019-10-10"
    }
  ]

  const fakeTimelineEvent = data.map( (timeline, i) => {
      return (
        <li key={i}>
          <TimelineEvent person={timeline.person}
            status={timeline.status}
            timestamp={timeline.timestamp} />
        </li>
      );
  });
  // Fill in your code here
  return (
    <section>
      <ul>
        {fakeTimelineEvent}
      </ul>
    </section>
  )
}

export default Timeline;
