import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import UpdateNotePage from "./UpdateNotePage";

import "./Notes.css";

function UpdateNotePageModal({ noteId }) {
  //   notebookId = notebookId.notebookId;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="update-icon" onClick={() => setShowModal(true)}>
        <i className="fa-solid fa-pen-to-square fa-2x"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateNotePage
            showModal={showModal}
            setShowModal={setShowModal}
            noteId={noteId}
          />
        </Modal>
      )}
    </>
  );
}

export default UpdateNotePageModal;
