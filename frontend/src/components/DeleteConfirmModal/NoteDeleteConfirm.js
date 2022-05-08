import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { deleteNoteThunk } from "../../store/note";

const NoteDeleteConfirm = ({ showModal, noteId, userId, notebookId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  // const { notebookId } = useParams();
  // console.log("/////", noteId);
  // console.log("..........", notebookId);
  const deleteCurrentNote = async () => {
    const deletedNoteId = await dispatch(deleteNoteThunk(noteId));
    if (deletedNoteId) {
      history.push(window.location.pathname);
      showModal(false);
    }
  };

  return (
    <div className="note-delete-form">
      <h4 className="warning-message">
        Do you really want to delete this note?
      </h4>
      <button className="yes-button" type="submit" onClick={deleteCurrentNote}>
        Yes
      </button>
    </div>
  );
};

export default NoteDeleteConfirm;
