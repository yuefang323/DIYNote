import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { deleteNoteThunk } from "../../store/note";

const NoteDeleteConfirm = ({ showModal, noteId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { notebookId } = useParams();
  console.log("/////", noteId);
  console.log("..........", notebookId);
  const deleteCurrentNote = async () => {
    const deletedNoteId = await dispatch(deleteNoteThunk(noteId));
    if (deletedNoteId) {
      history.push(`/notebooks/${notebookId}`);
      showModal(false);
    }
  };

  return (
    <div className="upload-form">
      Do you really want to delete this note?
      <button type="submit" onClick={deleteCurrentNote}>
        Yes
      </button>
    </div>
  );
};

export default NoteDeleteConfirm;
