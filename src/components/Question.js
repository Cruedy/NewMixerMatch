import React, {useEffect, useState} from "react";
import questions from "./QuestionList";
import {resultSet} from "./Form";

function Question({currentIndex, resetActive}) {
    const [activeIndex, setActiveIndex] = useState(null);

    const addItem = (item, index) => {
        resultSet[currentIndex] = item;
        console.log('added', resultSet);
        setActiveIndex(index);
    }

    useEffect(() => {
        setActiveIndex(null);
    }, [resetActive]);

    return (
        <div className="question-container">
        <h1 className='question-text'>{questions[currentIndex].question}</h1>
        <ul>
            {questions[currentIndex].options.map((option, index) => (
                <li 
                    key={index}
                    className={`question-option ${activeIndex === index ? "active" : ""}`}
                    onClick={() => addItem(option, index)}
                    >
                        {option}
                </li>
            ))}
        </ul>
    </div>);
}

export default Question;