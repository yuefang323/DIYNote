import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import NotebookDeleteConfirm from "./NotebookDeleteConfirm";
import "./DeleteConfirm.css";

function NotebookDeleteConfirmModal({ notebookId, userId }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} id="delete-link">
        <i className="fa-solid fa-trash-can fa-2x"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NotebookDeleteConfirm
            showModal={setShowModal}
            notebookId={notebookId}
            userId={userId}
          />
        </Modal>
      )}
    </>
  );
}

export default NotebookDeleteConfirmModal;
