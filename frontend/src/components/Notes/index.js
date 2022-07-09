import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { Modal } from "../../context/Modal";
import "./Notes.css";
import * as noteActions from "../../store/note";
import * as notebookActions from "../../store/notebook";

import CreateNotePage from "./CreateNotePage";
import NoteDeleteConfirmModal from "../DeleteConfirmModal/NoteDeleteModal";
import UpdateNotePageModal from "./UpdateNotePageModal";

function Notes() {
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const { notebookId } = useParams();
    const noteBook = useSelector((state) => state.notebooks)[notebookId];
    const notes = useSelector((state) => state.notes);
    const notesList = Object.values(notes);
    //   console.log("notesList", notesList);
    notesList.sort((a, b) => {
        const keyA = new Date(a.updatedAt);
        const keyB = new Date(b.updatedAt);
        return keyA > keyB ? -1 : 1;
    });

    const filteredNotes = notesList.filter(
        (note) => note.notebookId === Number(notebookId)
    );
    // console.log("filteredNotes", filteredNotes);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (sessionUser) {
            dispatch(noteActions.getAllNotesThunk(sessionUser.id));
            dispatch(notebookActions.getAllNotebooksThunk(sessionUser.id));
        }
    }, [dispatch, sessionUser]);

    if (!sessionUser) return <Redirect to="/" />;
    return (
        <div className="notes-container-singleNb">
            <h2 className="notebook-name">Notebook: {noteBook?.name}</h2>
            <h2 className="user-notes">
                This notebook have {filteredNotes.length} Notes
            </h2>
            {filteredNotes.map((note) => (
                <div className="note-detail" key={note.id}>
                    <h3 className="note-title">{note.title}</h3>
                    <div className="note-content-container">
                        <div className="note-detail-container">
                            <h4 className="note-content">{note.content}</h4>
                            <p className="updated-time">
                                Updated At:{" "}
                                {new Date(note.updatedAt).toDateString()}
                            </p>
                        </div>
                        <h4 className="buttons">
                            <UpdateNotePageModal noteId={note.id} />
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
