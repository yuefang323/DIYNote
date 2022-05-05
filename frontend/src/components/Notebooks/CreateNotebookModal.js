import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateNotebookPage from "./CreateNotebookPage";

import "./Notebooks.css";

function CreateNotebookModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="add-icon" onClick={() => setShowModal(true)}>
        Create New Notebook
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateNotebookPage
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
}

export default CreateNotebookModal;
