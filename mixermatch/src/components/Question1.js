import React, {useState} from "react";
import questions from "./QuestionList";
import {resultSet} from "./Form";

function Question1({currentIndex}) {
    const [activeIndex, setActiveIndex] = useState(null);

    const addItem = (item, index) => {
        console.log('called');
        console.log(resultSet);
        console.log('length', resultSet.length);
        resultSet[currentIndex] = item;
        console.log('added', resultSet);
        // if (resultSet.length <= currentIndex){
            
        // }
        // else {
        //     resultSet[currentIndex] = item;
        // }
        setActiveIndex(index);
    }
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

export default Question1;