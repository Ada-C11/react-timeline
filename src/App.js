import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

class App extends Component {
  render() {

    const postingData = timelineData.events.map ((post) => {
      return (
        {person: post.person, status: post.status, timeStamp: post.timeStamp}
      )
    });

    const displayPost = postingData.map ((post, i) => {
        return (
          <li key={i}>
            <Timeline event={ post } />
          </li>
        );
      });
    

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
          <ul>
            {displayPost}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
