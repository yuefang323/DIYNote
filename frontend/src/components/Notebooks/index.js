import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import NotebookDeleteConfirmModal from "../DeleteConfirmModal/NotebookDeleteModal";
import "./Notebooks.css";

import CreateNotebookModal from "./CreateNotebookModal";
import UpdateNotebookModal from "./UpdateNotebookModal";

import * as notebookActions from "../../store/notebook";

function Notebooks() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  useEffect(() => {
    if (sessionUser) {
      dispatch(notebookActions.getAllNotebooksThunk(sessionUser.id));
    }
  }, [dispatch, sessionUser]);
  const notebooks = useSelector((state) => state.notebooks);
  const notebooksList = Object.values(notebooks);
  notebooksList.sort((a, b) => {
    const keyA = new Date(a.updatedAt);
    const keyB = new Date(b.updatedAt);
    return keyA > keyB ? -1 : 1;
  });

  if (!sessionUser) return <Redirect to="/" />;
  return (
    <div className="notebook-container">
      <h2 className="user-name">{sessionUser.username}'s Notebooks</h2>
      <h3 className="notebooks-count">You have {notebooksList.length} Notebooks</h3>
      {notebooksList.map((notebook) => (
        <div className="notebook-detail" key={notebook.id}>
          <Link to={`/notebooks/${notebook.id}`} className="notebook-link">
            {notebook.name}
            <p className="updated-time">
            Updated At: {new Date(notebook.updatedAt).toDateString()}
            </p>
          </Link>
          <UpdateNotebookModal notebookId={notebook.id} />
          <NotebookDeleteConfirmModal
            notebookId={notebook.id}
            userId={sessionUser.id}
          />
        </div>
      ))}
      <div id="create-new-notebook">
        <CreateNotebookModal />
      </div>
    </div>
  );
}

export default Notebooks;
