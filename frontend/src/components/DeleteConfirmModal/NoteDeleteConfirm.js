import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteNoteThunk } from "../../store/note";

const NoteDeleteConfirm = ({ showModal, noteId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const deleteCurrentNote = async () => {
    const deletedNoteId = await dispatch(deleteNoteThunk(noteId));
    if (deletedNoteId) {
      history.push(window.location.pathname);
      showModal(false);
    }
  };

  const notDeleteCurNote = async () => {
    showModal(false)
  }

  return (
    <div className="note-delete-form">
      <h4 className="warning-message">
        Do you really want to delete this note?
      </h4>
      <button className="yes-button" type="submit" onClick={deleteCurrentNote}>
        Yes
      </button>
      <button className="yes-button" type="submit" onClick={notDeleteCurNote}>
        No
      </button>
    </div>
  );
};

export default NoteDeleteConfirm;
