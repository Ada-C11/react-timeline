import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';
import Timestamp from './components/Timestamp';

class App extends Component {
  render() {
    console.log(timelineData);

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada Lovelace's social media feed</h1>
        </header>
        <main className="App-main">
          <section>
            <TimelineEvent person="Kiko" status="I'm hungry" time='2019-05-18T22:12:03Z' />
          </section>
          <section>
            <TimelineEvent person="Pepper" status="I'm hungry too" time='2019-05-18T22:19:40Z' />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
