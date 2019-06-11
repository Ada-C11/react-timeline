import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';


const Timeline = (props) => {

    const timeLineEventsData = props.events.map((user, index) => {
      return (<TimelineEvent key= {index} name={user.person} status={user.status} timeStamp={user.timeStamp}/>)
    });

  return (
    <section className="timeline">
        {timeLineEventsData}
    </section>
  )
}

export default Timeline;
