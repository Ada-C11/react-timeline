import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const posts = props.events.map((event, i) => {
    return (
      <section>
        <TimelineEvent person={ event.person } status={ event.status } timestamp={ event.timeStamp } key={ i } />
      </section>
    );
  });

  return (
    <section>
      { posts }
    </section>
  );
};

export default Timeline;
