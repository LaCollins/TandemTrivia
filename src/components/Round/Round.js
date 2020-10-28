import React, { useState, useEffect } from 'react';
import './Round.css';
import Question from '../Question/Question';

function Round(props) {

    return(
        <div className="Round">
            {props.currentQuestion < 10 ? (<Question
            currentQuestion={props.currentQuestion}
            setCurrentQuestion={props.setCurrentQuestion}
            score={props.score}
            setScore={props.setScore}
            numRound={props.numRound}
            />)
            : (
            <div className="endOfGame">
                <h4>Congrats!</h4>
                <h5>You have finished the game!</h5>
                <h5>You have played {props.numRound} rounds.</h5>
                <h5>You got {props.score} out of {props.numRound}0 correct!</h5>
                <button onClick={() => props.resetGame()}>Play Again?</button>
            </div>)}
        </div>
    )
}

export default Round;
