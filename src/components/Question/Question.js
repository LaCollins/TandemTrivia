import React, { useEffect, useState } from 'react';
import data from '../../data/Apprentice_TandemFor400_Data.json';
import './Question.css';

function Question() {
    const [score, setScore] = useState(0);
    const quizArray = [];
    
    useEffect(() => {
        for (let i = 0; i <= 9; i++) {
            const randomNumber = Math.floor(Math.random() * Math.floor(data.length));
            quizArray.push(data[randomNumber]);
            data.splice(randomNumber, 1);
        }

        console.error(quizArray);
    })

    return (
      <div className="Question">
        <h1>Questions!</h1>
      </div>
    );
  }
  
  export default Question;