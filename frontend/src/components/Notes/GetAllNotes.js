import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { Modal } from "../../context/Modal";
import "./Notes.css";
import * as noteActions from "../../store/note";

import CreateNotePage from "./CreateNotePage";
import NoteDeleteConfirmModal from "../DeleteConfirmModal/NoteDeleteModal";
import UpdateNotePageModal from "./UpdateNotePageModal";

function AllNotes() {
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const { notebookId } = useParams();

    const notes = useSelector((state) => state.notes);
    const notesList = Object.values(notes);
    notesList.sort((a, b) => {
        const keyA = new Date(a.updatedAt);
        const keyB = new Date(b.updatedAt);
        return keyA > keyB ? -1 : 1;
    });

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (sessionUser) dispatch(noteActions.getAllNotesThunk(sessionUser.id));
    }, [dispatch, sessionUser]);

    if (!sessionUser) return <Redirect to="/" />;
    return (
        <div className="notes-container">
            <h2 className="user-notes-count">{sessionUser.username}'s Notes</h2>
            <h2 className="user-notes">You have {notesList.length} Notes</h2>
            {notesList.map((note) => (
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
                                userId={sessionUser.id}
                                notebookId={notebookId}
                            />
                        </h4>
                    </div>
                </div>
            ))}

            <button onClick={() => setShowModal(true)} className="create-btn">
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

export default AllNotes;
