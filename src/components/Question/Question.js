import React, { useEffect, useState } from 'react';
import data from '../../data/Apprentice_TandemFor400_Data.json';
import SingleQuestion from '../SingleQuestion/SingleQuestion';
import './Question.css';

function Question(props) {
    let [quizArray, setQuizArray] = useState([]);
    let [correctAnswer, setCorrectAnswer] = useState('');
    let [wrongAnswer, setWrongAnswer] = useState(false);
    let [correct, setCorrect] = useState(false);

    //selects 10 questions and shuffles them
    function getQuestions() {
        const newArray = [];
        for (let i = 0; i <= 9; i++) {
            const randomNumber = Math.floor(Math.random() * Math.floor(data.length));
            newArray.push(data[randomNumber]);
            data.splice(randomNumber, 1);
        }
        setQuizArray(quizArray = newArray);
    }

    // Updates the question count
    function updateCurrentQuestion(e) {
        e.preventDefault();
        props.setCurrentQuestion(props.currentQuestion + 1);
        setCorrectAnswer(correctAnswer = '')
        setWrongAnswer(wrongAnswer = false);
        setCorrect(correct = false);
    }

    //adds the score and changes state of answer to "correct".
    function addScore(answer) {
        props.setScore(props.score +1);
        setCorrectAnswer(correctAnswer = answer);
        setWrongAnswer(wrongAnswer = false);
        setCorrect(correct = true);
    }

    // changes state of wrong answer
    function wrongAns(answer) {
        setWrongAnswer(wrongAnswer = true);
        setCorrectAnswer(correctAnswer = answer);
        setCorrect(correct = false);
    }

    useEffect(() => {
        // checks if a quizArray has been built or if the user is continuing to play a new round - builds quizArray
        if (quizArray !== 10 || props.numRound > 1) {
            getQuestions();
        } 
    }, [])

    return (
      <div className="Question">
          { wrongAnswer ? (<h4 className="wrong">Sorry! That's incorrect!</h4>)
          : ('')}
          { correct ? (<h4 className="answer">Way to go!</h4>)
          : ('')}
          {correctAnswer !== '' ? (
            <div>
                <h4 className="answer">The Correct Answer Is: {correctAnswer}</h4>
                <h5>Your Score Is: {props.score}</h5>
                <button className="btn btn-info mt-5" onClick={updateCurrentQuestion}>Next Question</button>
            </div>)
          : (<div>
              <h1>Question #{props.currentQuestion+1}</h1>
                {quizArray.length < 1 || props.currentQuestion === 10 ? ('')
                : (<SingleQuestion quiz={quizArray[props.currentQuestion]} updateCurrentQuestion={updateCurrentQuestion} addScore={addScore} wrongAns={wrongAns} />)
                }
          </div>)}
      </div>
    );
  }
  
  export default Question;