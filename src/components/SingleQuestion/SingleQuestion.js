import React, { useState, useEffect } from 'react';
import './SingleQuestion.css';


function SingleQuestion(props) {
    const { quiz } = props;
    let [answers, setAnswers] = useState([]);
    let [correct, setCorrect] = useState(false);
    let [selectedAnswer, setSelectedAnswer] = useState('');

    // adds all the answers to one array and shuffles them
    function getAnswers() {
        const allAnswers = [];
        if (quiz !== undefined) {
            allAnswers.push(quiz.correct, quiz.incorrect[0], quiz.incorrect[1], quiz.incorrect[2]);
            allAnswers.sort(() => Math.random() - 0.5); // shuffles the answers
        }
        setAnswers(answers = allAnswers)
    }

    // checks if selected answer is correct
    function selectAnswer(e) {
        const userAnswer = e.currentTarget.value;
        setSelectedAnswer(selectedAnswer = quiz.correct)
        if (userAnswer === quiz.correct) {
            setCorrect(correct = true);
        } else {
            setCorrect(correct = false);
        }
    }

    // submits answer and adjusts score
    function checkAnswer(e) {
        e.preventDefault();
        if (selectedAnswer !== '') {
            if (correct) {
                props.addScore(selectedAnswer);
            } else {
                props.wrongAns(selectedAnswer);
            }
        }
    }

    useEffect(() => {
        getAnswers();
    }, [quiz])

    return (
        <div className="SingleQuestion">
            <p>{quiz.question}</p>
            {answers.length > 0 ? (
            <div>
                <form>
                    <div className="options">
                        {answers.map((answer) => (<div key={answer} className="d-flex justify-content-left singleAnswer"><input type="radio" id={answer} name="selectedAnswer" value={answer} onChange={selectAnswer} />
                        <label className="ml-2" htmlFor={answer}>{answer}</label></div>))}
                    </div>
                    <button className="btn btn-info mt-5" onClick={(e) => checkAnswer(e)}>Submit Answer</button>
                </form>
            </div>)
            : ('')}

        </div>
    )
}

export default SingleQuestion;
