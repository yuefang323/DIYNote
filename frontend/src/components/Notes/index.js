import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link, useHistory, useParams } from "react-router-dom";
import { Modal } from "../../context/Modal";
import "./Notes.css";
import * as noteActions from "../../store/note";

import CreateNotePage from "./CreateNotePage";
import NoteDeleteConfirmModal from "../DeleteConfirmModal/NoteDeleteModal";

function Notes() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const { notebookId } = useParams();

  const notes = useSelector((state) => state.notes);
  const notesList = Object.values(notes);
  notesList.sort((a, b) => {
    const keyA = new Date(a.updatedAt);
    const keyB = new Date(b.updatedAt);
    return keyA > keyB ? -1 : 1;
  });

  const filteredNotes = notesList.filter(
    (note) => note.notebookId === Number(notebookId)
  );

  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [currentNoteId, setCurrentNoteId] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContent, setCurrentContent] = useState("");

  useEffect(() => {
    if (sessionUser) dispatch(noteActions.getAllNotesThunk(sessionUser.id));
  }, [dispatch, sessionUser]);

  if (!sessionUser) return <Redirect to="/" />;
  return (
    <div className="notes-container">
      <h2>{sessionUser.username}'s Notes</h2>
      <h2 className="user-notes">
        This notebook have {filteredNotes.length} Notes
      </h2>
      {filteredNotes.map((note) => (
        <div className="note-detail" key={note.id}>
          <h3 className="note-title">{note.title}</h3>
          <div className="note-content-container">
            <div className="note-detail-container">
              <h4 className="note-content">{note.content}</h4>
              <h4>Updated At: {new Date(note.updatedAt).toDateString()}</h4>
            </div>
            <h4 className="buttons">
              <button
                onClick={() => {
                  setCurrentTitle(note.title);
                  setCurrentContent(note.content);
                  history.push(`/notes/${note.id}`);
                }}
                className="edit-btn"
              >
                <i className="fa-solid fa-pen-to-square fa-2x"></i>
              </button>
              {/* <button onClick={() => dispatch(noteActions.deleteNoteThunk(note.id, userId))} className='delete-btn'>DELETE</button> */}
              <NoteDeleteConfirmModal
                noteId={note.id}
                notebookId={notebookId}
                userId={sessionUser.id}
              />
            </h4>
          </div>
        </div>
      ))}

      <button onClick={() => setShowModal(true)} className="add-btn">
        Create New Note
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateNotePage
            showModal={showModal}
            setShowModal={setShowModal}
            notebookId={notebookId}
          />
        </Modal>
      )}
    </div>
  );
}

export default Notes;
