import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Question, {answers} from "./Question";
import questions from "./QuestionList";
import Results from "./Results"

export const resultSet = [];
export default function Form(){
    let navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [resetActive, setResetActive] = useState(false);
    // const FormTitles = ["Question 1", "Question 2", "Question 3"]
    const checkAnswered = () => {
        console.log('result', resultSet);
        if (resultSet.length > page && resultSet[page] != undefined) {
            return true;
        }
        return false;
    }
    const handleNext = () => {
        if(checkAnswered()) {
            setResetActive((prev) => !prev);
            setPage((currPage => currPage+1))
        }
    }

    const handlePrev = () => {
        if(checkAnswered()) {
            setResetActive((prev) => !prev);
            setPage((currPage => currPage-1))
        }
    }

    const handleSubmit = () => {
        if(checkAnswered()) {
            setResetActive((prev) => !prev);
            navigate("/results");
            console.log("Form Done!")
        }
    }
    return (
        <div className="form">
            <div className="progressbar"></div>
            <div className="form-container">
                <div className="header"></div>
                <h1>Question {page + 1}</h1>
                <div className="body">
                    <Question currentIndex={page} resetActive={resetActive}/>
                </div>
                <div className="footer">
                    <button 
                        hidden={page == 0}
                        onClick={
                        handlePrev}
                        >
                            Prev
                    </button>
                    <button
                        hidden={page >= questions.length -1 }
                        onClick={handleNext}>
                            Next
                    </button>
                    <button 
                        hidden={page < questions.length -1 || page > questions.length -1}
                        onClick={handleSubmit}
                        >
                            Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
