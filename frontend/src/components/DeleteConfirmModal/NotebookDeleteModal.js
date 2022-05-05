import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import NotebookDeleteConfirm from "./NotebookDeleteConfirm";

function NotebookDeleteConfirmModal({ notebookId }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} id="delete-link">
        <i className="fa-solid fa-trash-can"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteConfirm showModal={setShowModal} notebookId={notebookId} />
        </Modal>
      )}
    </>
  );
}

export default NotebookDeleteConfirmModal;