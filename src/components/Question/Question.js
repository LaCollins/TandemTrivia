import React, { useEffect, useState } from 'react';
import data from '../../data/Apprentice_TandemFor400_Data.json';
import SingleQuestion from '../SingleQuestion/SingleQuestion';
import './Question.css';

function Question() {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    let [quizArray, setQuizArray] = useState([]);

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
        setCurrentQuestion(currentQuestion + 1);
    }

    useEffect(() => {
        if (quizArray !== 10) {
            getQuestions();
            console.error(quizArray);
        } 
    }, [])

    return (
      <div className="Question">
        <h1>Question #{currentQuestion+1}</h1>
        {quizArray.length < 1 || currentQuestion === 10 ? ('')
        : (<SingleQuestion quiz={quizArray[currentQuestion]} updateCurrentQuestion={updateCurrentQuestion} />)
    }
        {/* <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Test</button> */}
      </div>
    );
  }
  
  export default Question;