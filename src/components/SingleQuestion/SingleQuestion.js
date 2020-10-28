import React, { useState, useEffect } from 'react';

function SingleQuestion(props) {
    const { quiz } = props;
    let [answers, setAnswers] = useState([]);


    function getAnswers() {
        const allAnswers = [];
        if (quiz !== undefined) {
            allAnswers.push(quiz.correct, quiz.incorrect[0], quiz.incorrect[1], quiz.incorrect[2]);
            allAnswers.sort(() => Math.random() - 0.5); // shuffles the answers
        }
        setAnswers(answers = allAnswers)
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
                    <input type="radio" id={answers[0]} name="selectedAnswer" value={answers[0]}/>
                    <label for={answers[0]}>{answers[0]}</label><br />
                    <input type="radio" id={answers[1]} name="selectedAnswer" value={answers[1]}/>
                    <label for={answers[1]}>{answers[1]}</label><br />
                    <input type="radio" id={answers[2]} name="selectedAnswer" value={answers[2]}/>
                    <label for={answers[2]}>{answers[2]}</label><br />
                    <input type="radio" id={answers[3]} name="selectedAnswer" value={answers[3]}/>
                    <label for={answers[3]}>{answers[3]}</label><br />
                    <button onClick={(e) => props.updateCurrentQuestion(e)}>Submit Answer</button>
                </form>
            </div>)
            : ('')}

        </div>
    )
}

export default SingleQuestion;
