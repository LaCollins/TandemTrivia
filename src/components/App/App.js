import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from '../Question/Question';

function App() {
  let [playing, setPlaying] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Tandem Trivia!</h1>
      </header>
      { !playing ? (<button className="btn btn-info playButton" onClick={()=> setPlaying(playing = true)}>Play!</button>)
        : (<Question />)}
    </div>
  );
}

export default App;
