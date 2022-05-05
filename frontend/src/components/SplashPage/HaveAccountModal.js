import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginFormModal/LoginForm";

import '../LoginFormModal/LoginForm.css'


function HaveAccountModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="login-modal" onClick={() => setShowModal(true)}>Already have an account? Log in</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default HaveAccountModal;
