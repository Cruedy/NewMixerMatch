import React, {useState} from 'react';
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";

function Form() {
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
    return (
        <div className="form">
            <div className="progressbar"></div>
            <div className="form-contianer">
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
                        // disabled={page == FormTitles.length -1}
                        hidden={page >= FormTitles.length -1}
                        onClick={() => {
                        setPage((currPage) => currPage + 1);
                        }}>
                            Next
                    </button>
                    <button 
                        // disabled={page == FormTitles.length -1}
                        hidden={page < FormTitles.length -1 || page > FormTitles.length -1}
                        onClick={() => {
                        setPage((currPage) => currPage + 1);
                        }}>
                            Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form;