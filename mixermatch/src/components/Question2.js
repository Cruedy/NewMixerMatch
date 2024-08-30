import React, {useState} from "react";
import questions from "./QuestionList";
import {resultSet} from "./Form";

function Question2() {
    const [activeIndex, setActiveIndex] = useState(null);

    const addItem = (item, index) => {
        console.log('called');
        console.log(resultSet);
        console.log('length', resultSet.length);
        if (resultSet.length < 2){
            resultSet.push(item);
            console.log('added', resultSet);
        }
        else {
            resultSet[0] = item;
        }
        setActiveIndex(index);
    }
    return (
        <div className="question-container">
        <h1 className='question-text'>{questions[1].question}</h1>
        <ul>
            {questions[1].options.map((option, index) => (
                <li 
                    key={index}
                    className={`question-option ${activeIndex === index ? "active" : ""}`}
                    onClick={() => addItem(option, index)}>{option}</li>
            ))}
        </ul>
    </div>);
}

export default Question2;