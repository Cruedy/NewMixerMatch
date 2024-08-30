import React, {useState} from 'react';
import Question1, {answers} from "./Question1";
import questions from "./QuestionList";

export const resultSet = [];
export default function Form(){
    const [page, setPage] = useState(0);
    const FormTitles = ["Question 1", "Question 2", "Question 3"]
    const checkAnswered = () => {
        console.log('result', resultSet);
        if (resultSet.length > page && resultSet[page] != undefined) {
            return true;
        }
        return false;
    }
    return (
        <div className="form">
            <div className="progressbar"></div>
            <div className="form-container">
                <div className="header"></div>
                <h1>{FormTitles[page]}</h1>
                <div className="body">
                    <Question1 currentIndex={page}/>
                </div>
                <div className="footer">
                    <button 
                        hidden={page == 0}
                        onClick={() => {
                        setPage((currPage) => currPage - 1);
                        }}>
                            Prev
                    </button>
                    <button
                        hidden={page >= FormTitles.length -1 }
                        onClick={() => {
                        console.log('active');
                        if (checkAnswered() == true) {
                            setPage((currPage) => currPage + 1);
                        }
                        console.log('answering', checkAnswered());
                        }}>
                            Next
                    </button>
                    <button 
                        hidden={page < FormTitles.length -1 || page > FormTitles.length -1}
                        onClick={() => {
                        if (checkAnswered() == true) {
                            setPage((currPage) => currPage + 1);
                        }
                        checkAnswered();
                        }}>
                            Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
