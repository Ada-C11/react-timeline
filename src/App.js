import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    const timelineObjects = timelineData.events.map((timelineObject, i) => {
      return {
        time: timelineObject.timeStamp,
        person: timelineObject.person,
        status: timelineObject.status,
      };
    });

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Super Awesome Timeline</h1>
        </header>
        <main className="App-main">
          <Timeline events={timelineObjects} />
        </main>
      </div>
    );
  }
}

export default App;
