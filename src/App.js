import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

const postEvents = () => {
  return <Timeline events={timelineData["events"]} />
};

class App extends Component {
  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
          { postEvents() }
        </main>
      </div>
    );
  }
}

export default App;
