import React, { useState, useEffect } from 'react';
import './SingleQuestion.css';


function SingleQuestion(props) {
    const { quiz } = props;
    let [answers, setAnswers] = useState([]);
    let [correct, setCorrect] = useState(false);
    let [selectedAnswer, setSelectedAnswer] = useState('');


    function getAnswers() {
        const allAnswers = [];
        if (quiz !== undefined) {
            allAnswers.push(quiz.correct, quiz.incorrect[0], quiz.incorrect[1], quiz.incorrect[2]);
            allAnswers.sort(() => Math.random() - 0.5); // shuffles the answers
        }
        setAnswers(answers = allAnswers)
    }

    function selectAnswer(e) {
        const userAnswer = e.currentTarget.value;
        setSelectedAnswer(selectedAnswer = quiz.correct)
        if (userAnswer === quiz.correct) {
            setCorrect(correct = true);
        }
    }

    function checkAnswer(e) {
        e.preventDefault();
        if (correct) {
            props.addScore(selectedAnswer);
        } else {
            props.wrongAns(selectedAnswer);
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
                        {answers.map((answer) => (<div className="d-flex justify-content-left singleAnswer"><input key={answer} type="radio" id={answer} name="selectedAnswer" value={answer} onChange={selectAnswer} />
                        <label className="ml-2" htmlFor={answer}>{answer}</label></div>))}
                    </div>
                    <button className="btn btn-info" onClick={(e) => checkAnswer(e)}>Submit Answer</button>
                </form>
            </div>)
            : ('')}

        </div>
    )
}

export default SingleQuestion;
