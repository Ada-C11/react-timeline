import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
// import TimelineEvent from './components/TimelineEvent'; //temp


class App extends Component {

  render() {
    console.log(timelineData);
    const eventObjects = timelineData.events.map((event, i) => {
      return event;
    });
    console.log(eventObjects);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Soash Meeds</h1>
        </header>
        <main className="App-main">
          <Timeline events={eventObjects} />
        </main>
      </div>
    );
  }
}

export default App;
