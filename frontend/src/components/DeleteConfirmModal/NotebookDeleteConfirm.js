import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteNotebookThunk } from "../../store/notebook";
import { clearNotesThunk } from "../../store/note";

import "./DeleteConfirm.css";

const NotebookDeleteConfirm = ({ showModal, notebookId, userId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const deleteCurrentNotebook = async () => {
    const deletedNotebookId = await dispatch(deleteNotebookThunk(notebookId));
    const anything = await dispatch(clearNotesThunk());
    if (deletedNotebookId) {
      history.push(`/users/${userId}/notebooks`);
      showModal(false);
    }
  };

  const notDeleteCurNB = async () => {
    showModal(false)
  }

  return (
    <div className="notebook-delete-form">
      <h4 className="warning-message">Do you really want to delete this notebook? It will delete all notes
      included in this notebook!
      </h4>
      <button className="yes-button" type="submit" onClick={deleteCurrentNotebook}>
        Yes
      </button>
      <button className="yes-button" type="submit" onClick={notDeleteCurNB}>
        No
      </button>
    </div>
  );
};

export default NotebookDeleteConfirm;
