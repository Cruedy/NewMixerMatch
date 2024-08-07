import React from "react";
import questions from "./QuestionList";
import {resultSet} from "./Form";

function Question1() {
    const addItem = (item) => {
        console.log('called');
        console.log(resultSet);
        console.log('length', resultSet.length);
        if (resultSet.length < 1){
            resultSet.push(item);
            console.log('added', resultSet);
        }
        else {
            resultSet[0] = item;
        }
    }
    return (
        <div className="question-container">
        <h1 className='question-text'>{questions[0].question}</h1>
        <ul>
            <li className="question-option" onClick={()=> addItem(questions[0].options[0])}>{questions[0].options[0]}</li>
            <li className="question-option" onClick={()=> addItem(questions[0].options[1])}>{questions[0].options[1]}</li>
            <li className="question-option" onClick={()=> addItem(questions[0].options[2])}>{questions[0].options[2]}</li>
            <li className="question-option" onClick={()=> addItem(questions[0].options[3])}>{questions[0].options[3]}</li>
        </ul>
    </div>);
}

export default Question1;