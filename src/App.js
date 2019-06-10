import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent'

import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada Lovelace's social media feed</h1>
        </header>
        <main className="App-main">
          <TimelineEvent person="Shel Silverstein" status="A treehouse, a free house, a secret you and me house, a high up in the leafy branches cozy as can be house."/>
        </main>
      </div>
    );
  }
}

export default App;

{/* <Student fullName="Improved Ada" email="improved-ada@ada.co" /> */}
