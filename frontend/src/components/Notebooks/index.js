import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link, useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import NotebookDeleteConfirmModal from '../DeleteConfirmModal/NotebookDeleteModal'
import "./Notebooks.css";

import CreateNotebookPage from "./CreateNotebookPage";
import UpdateNotebookPage from "./UpdateNotebookPage";

import * as notebookActions from "../../store/notebook";

function Notebooks() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;
  const notebooks = useSelector((state) => state.notebooks);
  const notebooksList = Object.values(notebooks);
  notebooksList.sort((a, b) => {
    const keyA = new Date(a.createdAt);
    const keyB = new Date(b.createdAt);
    return keyA > keyB ? -1 : 1;
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(notebookActions.getAllNotebooksThunk(userId));
  }, [dispatch]);

  return (
    <div className="notebook-container">
      <h2>{sessionUser.username}'s Notebooks</h2>
      <h3>{notebooksList.length} Notebooks</h3>
      {notebooksList.map((notebook) => (
        <div className="notebook-title" key={notebook.id}>
          <Link to={`/notebooks/${notebook.id}`} className="notebook-link">
            Name: {notebook.name}
          </Link>
          <button
            className="notebook-rename-btn"
            onClick={() => setShowModal(true)}
          >
            Rename Notebook
          </button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <UpdateNotebookPage
                showModal={showModal}
                setShowModal={setShowModal}
              />
            </Modal>
          )}
          {/* <button
            className="notebook-delete-btn"
            onClick={() =>
              dispatch(notebookActions.deleteNotebookThunk(notebook.id))
            }
          >
            {" "}
            Delete
          </button> */}
          <NotebookDeleteConfirmModal notebookId={notebook.id}/>

        </div>
      ))}

      <button
        className="notebook-create-btn"
        onClick={() => setShowModal(true)}
      >
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
      {/* <img src='' alt='gif'/> */}
      {/* <iframe src="https://giphy.com/embed/3oKGzvg3gGxSS3O38A" width="280" height="280" frameBorder="0" allowFullScreen></iframe> */}
    </div>
  );
}

export default Notebooks;
