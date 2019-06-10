import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';

import TimelineEvent from './components/TimelineEvent';
import Timestamp from './components/Timestamp';

class App extends Component {
  render() {

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada Lovelace's Social Media Feed</h1>
        </header>
        <main className="App-main">
          <ul>

            <Timeline eventProps={timelineData.events}/>
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
