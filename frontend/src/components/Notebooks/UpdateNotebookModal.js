import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import UpdateNotebookPage from "./UpdateNotebookPage";

import "./Notebooks.css";

function UpdateNotebookModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="add-icon" onClick={() => setShowModal(true)}>
        <i class="fa-solid fa-pen-to-square"></i>
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
