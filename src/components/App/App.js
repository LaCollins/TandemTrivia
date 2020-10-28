import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Round from '../Round/Round';

function App() {
  let [playing, setPlaying] = useState(false);
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  let [score, setScore] = useState(0);
  const [numRound, setNumRound] = useState(1);

  // resets the currentQuestion count and adds to the number of rounds
  function resetGame() {
    setCurrentQuestion(currentQuestion = 0);
    setNumRound(numRound + 1);
    setScore(score = 0);
}

  return (
    <div className="App container p-0">
      <div className="header p-3">
        <h1>Welcome to Tandem Trivia!</h1>
      </div>
        { !playing ? (<button className="btn btn-info playButton" onClick={()=> setPlaying(playing = true)}>Play!</button>)
          : (<Round
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          score={score} setScore={setScore}
          resetGame={resetGame}
          numRound={numRound}
          setTotalScore={setTotalScore}
          totalScore={totalScore}
          />)}
    </div>
  );
}

export default App;
