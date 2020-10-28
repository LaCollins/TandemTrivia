import React, { useEffect, useState } from 'react';
import data from '../../data/Apprentice_TandemFor400_Data.json';
import SingleQuestion from '../SingleQuestion/SingleQuestion';
import './Question.css';

function Question(props) {
    const [score, setScore] = useState(0);
    let [quizArray, setQuizArray] = useState([]);
    let [correctAnswer, setCorrectAnswer] = useState('');
    let [wrongAnswer, setWrongAnswer] = useState(false);

    function getQuestions() { //selects 10 questions and shuffles them
        const newArray = [];
        for (let i = 0; i <= 9; i++) {
            const randomNumber = Math.floor(Math.random() * Math.floor(data.length));
            newArray.push(data[randomNumber]);
            data.splice(randomNumber, 1);
        }
        setQuizArray(quizArray = newArray);
    }

    function updateCurrentQuestion(e) {
        e.preventDefault();
        props.setCurrentQuestion(props.currentQuestion + 1);
        setCorrectAnswer(correctAnswer = '')
        setWrongAnswer(wrongAnswer = false);
    }

    function addScore(answer) {
        setScore(score +1);
        setCorrectAnswer(correctAnswer = answer);
        setWrongAnswer(wrongAnswer = false);
    }

    function wrongAns(answer) {
        setWrongAnswer(wrongAnswer = true);
        setCorrectAnswer(correctAnswer = answer);
    }

    useEffect(() => {
        if (quizArray !== 10) {
            getQuestions();
        } 
    }, [])

    return (
      <div className="Question">
          { wrongAnswer ? (<h4>Sorry! That's incorrect!</h4>)
          : ('')}
          {correctAnswer !== '' ? (
            <div>
                <h4>The Correct Answer Is: {correctAnswer}</h4>
                <h5>Your Score Is: {score}</h5>
                <button onClick={updateCurrentQuestion}>Next Question</button>
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