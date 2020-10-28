import React, { useState, useEffect } from 'react';

function SingleQuestion(props) {

    return (
        <div className="SingleQuestion">
            <p>{props.quiz.question}</p>
        </div>
    )
}

export default SingleQuestion;
