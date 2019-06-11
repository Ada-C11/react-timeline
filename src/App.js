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
          <h1 className="App-title">{timelineData.person}</h1>
        </header>
        <main className="App-main">
          {/* <Timeline events={timelineData["events"] person={timelineData.person}} />
        sooo thats not how it works, just rememnber that events just equals something, ignore it, and we can pass in multipe props but theyre still a prop? I dunno but correctness would be... */}
        <Timeline events={timelineData["events"]} />
        </main>
      </div>
    );
  }
}

export default App;
