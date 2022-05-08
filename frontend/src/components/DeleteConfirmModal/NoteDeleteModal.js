import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteConfirm from "./NoteDeleteConfirm";

function DeleteConfirmModal({ noteId, userId, notebookId }) {
  const [showModal, setShowModal] = useState(false);
  // console.log('........', userId); 
  return (
    <>
      <button onClick={() => setShowModal(true)} id="delete-link">
        <i className="fa-solid fa-trash-can fa-2x"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteConfirm showModal={setShowModal} noteId={noteId} userId={userId} notebookId={notebookId} />
        </Modal>
      )}
    </>
  );
}

export default DeleteConfirmModal;