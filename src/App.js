import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';


class App extends Component {
 

  render() {
    console.log(timelineData);

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <img 
            src='https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwODQwOTQ2MTkw/ada-lovelace-20825279-1-402.jpg' 
            alt="Ada Lovelace\'s avatar" />
          <h1 className="App-title">Ada Lovelace's Social Media Feed</h1>
        </header>
        <main className="App-main">
          <Timeline events={timelineData.events} />
        </main>

        <footer>
          kimbook, LLC
        </footer>
      </div>
    );
  }
}

export default App;
