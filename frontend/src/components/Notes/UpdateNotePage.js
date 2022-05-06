import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import "./Notes.css";

import * as noteActions from "../../store/note";

function UpdateNotePage({ editModal, setEditModal, noteTitle, noteContent }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const notes = useSelector((state) => state.notes);
  const { notebookId, noteId } = useParams();

  const oldNote = notes[noteId];

  const [title, setTitle] = useState(oldNote.title);
  const [content, setContent] = useState(oldNote.content);
  const [errors, setErrors] = useState([]);
  const [submitClicked, setSubmitClicked] = useState(false);

  if (!sessionUser) return <Redirect to="/" />;
  const userId = sessionUser.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = [];
    if (content.length < 1) validateErrors.push("Content is required");

    if (validateErrors.length > 0) {
      setErrors(validateErrors);
      return;
    }
    const updatedNote = {
      title,
      content,
      notebookId,
      userId,
    };
    dispatch(noteActions.updateNoteThunk(updatedNote, noteId));
    history.goBack();
  };

  const cancelButton = async (e) => {
    if(content) {
      if(window.confirm('Are you sure???')) {
        const oldNote = await dispatch(
          noteActions.getOneNoteThunk({ noteId })
        )
        // console.log(noteId, '..........')
        setTitle(oldNote.title);
        setContent(oldNote.content);
        setSubmitClicked(false);
        history.push(`/users/${userId}/notes`);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="edit-notebook-form">
      <h2 className="edit-note-title">Update your note</h2>
      <ul className="edit-note-errors">
        {errors && errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
      <div className="note-edit-form">
        <label className="edit-note-label">
          Title
          <input
            className="edit-note-input"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label className="edit-note-label">
          Content
          <textarea
            className="edit-note-text"
            type="text"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>

        <button className="edit-note-submit" type="submit" onClick={() => setSubmitClicked(true)}>
          Submit
        </button>
        <button className="edit-note-submit" onClick={cancelButton} type="reset">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default UpdateNotePage;
