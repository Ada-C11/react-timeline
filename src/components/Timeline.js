import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const postData = (events) => {
  return events.map((post) => {
    return (
      <TimelineEvent person={ post.person } status={ post.status } timestamp={ post.timeStamp } />
      )
    })
  }
    const Timeline = (props) => {
    return (
      <section>
        { postData(props.events) }
      </section>
    )
  }

export default Timeline;
/* <p>key={i}</p> */