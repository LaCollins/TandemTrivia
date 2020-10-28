import React, { useState, useEffect } from 'react';


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
        const selectedAnswer = e.currentTarget.value;
        if (selectedAnswer === quiz.correct) {
            setCorrect(correct = true);
            setSelectedAnswer({ selectedAnswer })
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
                    {answers.map((answer) => (<div><input type="radio" id={answer} name="selectedAnswer" value={answer} onChange={selectAnswer} key={answer} />
                    <label htmlFor={answer}>{answer}</label></div>))}
                    <button onClick={(e) => checkAnswer(e)}>Submit Answer</button>
                </form>
            </div>)
            : ('')}

        </div>
    )
}

export default SingleQuestion;
