import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

class App extends Component {
  render() {
    console.log(timelineData);
    const timelineComponent = timelineData["events"].map((post,i) => {
      return (
        <li key={i}>
          <TimelineEvent 
            person={post.person}
            timeStamp={post.timeStamp}
            status={post.status}
          />
        </li>
      )
    }
    )
    const data = timelineData["events"]
    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada's Social Media Feed</h1>
        </header>
        <main className="App-main">
          <ul>
            {timelineComponent}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
