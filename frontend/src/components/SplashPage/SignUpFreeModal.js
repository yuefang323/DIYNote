import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupFormPage from "../SignupFormModal/SignupForm";
import "../SignupFormModal/SignupForm.css";

function SignupFreeModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="signup-modal" onClick={() => setShowModal(true)}>
        Sign up for free
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupFormPage />
        </Modal>
      )}
    </>
  );
}

export default SignupFreeModal;
