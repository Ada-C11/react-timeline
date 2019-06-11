import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const posts = props.events.map((event, i) => {
    return (
      <section key={ i }>
        <TimelineEvent 
          person={ event.person } 
          status={ event.status } 
          timestamp={ event.timeStamp } />
      </section>
    );
  });

  return (
    <section className="post">
      { posts }
    </section>
  );
};

export default Timeline;
