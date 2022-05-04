import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import * as notebookActions from '../../store/notebook';
import './Notebooks.css'
import { useHistory, useParams, Redirect } from "react-router-dom";

const CreateNotebookPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const { notebookId } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = sessionUser.id

    const [title, setTitle] = useState('');
    const [errors, setErrors] = useState([]);

    if (!sessionUser) return <Redirect to="/signup" />;


    const handleSubmit = async (e) => {
        e.preventDefault();
        const validateErrors = [];
        if(title.length < 1) validateErrors.push('Title is required');
        if(validateErrors){
            setErrors(validateErrors);
            return;
        }

        const newNotebook = {
            title, 
            userId, 
        }
        // dispatch(notebookActions.createNotebook(newNotebook));
        // setShowModal(false);

    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a new notebook</h2>
            <ul>
                {errors && errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
            <div>
                <label>
                    Name:
                    <input
                        className='create-notebook-input'
                        type="text"
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <button className='create-notebook-submit' type="submit">Submit</button>
            </div>
        </form>
    )
}

export default CreateNotebookPage;