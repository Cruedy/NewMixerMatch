import React, {useState} from 'react';
import Question1, {answers} from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";

export const resultSet = [];
export default function Form(){
    const [page, setPage] = useState(0);
    const FormTitles = ["Question 1", "Question 2", "Question 3"]
    const PageDisplay = () => {
        if (page == 0) {
            return <Question1 />;
        } else if (page == 1) {
            return <Question2 />;
        } else {
            return <Question3 />;
        }
    }
    const checkAnswered = () => {
        console.log('result', resultSet);
        if (resultSet.length-1 == page) {
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
                <div className="body">{PageDisplay()}</div>
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
