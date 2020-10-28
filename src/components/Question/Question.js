import React, { useEffect, useState } from 'react';
import data from '../../data/Apprentice_TandemFor400_Data.json';
import SingleQuestion from '../SingleQuestion/SingleQuestion';
import './Question.css';

function Question() {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    let [quizArray, setQuizArray] = useState([]);

    function getQuestions() {
        const newArray = [];
        for (let i = 0; i <= 9; i++) {
            const randomNumber = Math.floor(Math.random() * Math.floor(data.length));
            newArray.push(data[randomNumber]);
            data.splice(randomNumber, 1);
        }
        setQuizArray(quizArray = newArray);
    }

    useEffect(() => {
        if (quizArray.length !== 10) {
            getQuestions();
        }
    })

    return (
      <div className="Question">
        <h1>Question #{currentQuestion+1}</h1>
        <SingleQuestion quiz={quizArray[currentQuestion]} />
      </div>
    );
  }
  
  export default Question;