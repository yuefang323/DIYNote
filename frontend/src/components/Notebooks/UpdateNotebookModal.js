import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import UpdateNotebookPage from "./UpdateNotebookPage";

import "./Notebooks.css";

function UpdateNotebookModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="update-icon" onClick={() => setShowModal(true)}>
        <i className="fa-solid fa-pen-to-square fa-2x"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateNotebookPage
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
}

export default UpdateNotebookModal;
