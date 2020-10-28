import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from '../Question/Question';

function App() {
  let [playing, setPlaying] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Tandem Trivia!</h1>
      </header>
      { !playing ? (<button className="btn btn-info playButton" onClick={()=> setPlaying(playing = true)}>Play!</button>)
        : (<Question currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />)}
    </div>
  );
}

export default App;
