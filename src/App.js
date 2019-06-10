import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent';


import Timeline from './components/Timeline';

class App extends Component {
  render() {
    console.log(timelineData);


  

    // Customize the code below
    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ada Lovelace's social media feed</h1>
        </header>
        <main className="App-main">
          <section>
            <TimelineEvent person="heather" status="busy" timestamp="2018-05-18T22:12:03Z" />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
