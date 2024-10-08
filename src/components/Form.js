import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Question, {answers} from "./Question";
import questions from "./QuestionList";
import Results from "./Results"
import { generateClient } from "aws-amplify/data";

const client = generateClient();

export const resultSet = [];
export default function Form(){
    let navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [resetActive, setResetActive] = useState(false);
    let prog = ((((page + 1)/questions.length) * 100).toString()).concat("%"); 
    const [todos, setTodos] = useState([]);

    // const fetchTodos = async () => {
    //     const { data: items, errors } = await client.models.Todo.list();
    //     setTodos(items);
    // };
    
    useEffect(() => {
        const sub = client.models.Todo.observeQuery().subscribe({
            next: ({ items }) => {
                setTodos([...items]);
            },
        });
        return () => sub.unsubscribe();
    }, []);

    // useEffect(() => {
    //     fetchTodos();
    // }, []);

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
        // send information to database
        if(checkAnswered()) {
            try {
                client.models.Todo.create({
                    resultSet: resultSet,
                });
                // fetchTodos();
                console.log("Form saved to database!")
            } catch (error) {
                console.error("Couldn't save form to database!")
            }
            setResetActive((prev) => !prev);
            navigate("/results");
            console.log("Form Done!")
        }
    }

    return (
        <div className="form">
            <div className="progressbar">
                <div style={{width: prog}}>
                </div>
            </div>
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
