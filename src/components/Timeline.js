import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


const postData = (props) =>
  props.events.map( (post, i) => {
    return (
      <TimelineEvent person={ post.person } status={ post.status } timeStamp={ post.timeStamp } />
    )
})

const Timeline = (props) => {
  // Fill in your code here
  return (
    <section className="timeline">
      { postData(props) }
    </section>
  )
};

export default Timeline;
