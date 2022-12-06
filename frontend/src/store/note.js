import { csrfFetch } from "./csrf";

// -------- Constants --------
const GET_NOTES = "notes/GET_NOTES";
const GET_ONE_NOTE = "notes/GET_ONE_NOTE";
const CREATE_NOTE = "notes/CREATE_NOTE";
const UPDATE_NOTE = "notes/UPDATE_NOTE";
const DELETE_NOTE = "notes/DELETE_NOTE";
const CLEAR_NOTES = "notes/CLEAR";
// ---------------- Actions -----------
// GET a user's all notes
export const getAllNotes = (notes) => ({
  type: GET_NOTES,
  notes,
});
// GET a note
export const getOneNote = (note) => ({
  type: GET_ONE_NOTE,
  note,
});
// POST a new note
export const createNote = (newNote) => ({
  type: CREATE_NOTE,
  newNote,
});
// UPDATE a note
export const updateNote = (note) => ({
  type: UPDATE_NOTE,
  note,
});
// DELETE a note
export const deleteNote = (note) => ({
  type: DELETE_NOTE,
  note,
});
// CLEAR notes in a state
const clearNotes = () => ({
  type: CLEAR_NOTES,
});

// ---------------- Thunk Actions -------------
// Thunk for getting all notes
export const getAllNotesThunk = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}/notes`);
  if (response.ok) {
    const notes = await response.json();
    dispatch(getAllNotes(notes));
    return notes;
  }
};
// Thunk for getting a note
export const getOneNoteThunk =
  ({ noteId }) =>
  async (dispatch) => {
    // console.log('......', noteId)
    const response = await csrfFetch(`/api/notes/${noteId}`);
    if (response.ok) {
      const note = await response.json();
      dispatch(getOneNote(note));
      return note;
    }
  };
// Thunk for creating a new note
export const createNoteThunk = (newNote) => async (dispatch) => {
  const { title, content, notebookId, userId } = newNote;
  const res = await csrfFetch(`/api/notes/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, notebookId, userId }),
  });
  if (res.ok) {
    const newNote = await res.json();
    dispatch(createNote(newNote));
    return newNote;
  }
};
// Thunk for updating a note
export const updateNoteThunk = (updatedNote, id) => async (dispatch) => {
  const { title, content, notebookId, userId } = updatedNote;
  const notebookIdInt = parseInt(notebookId);
//   console.log("notebookId", typeof notebookIdInt);
  const res = await csrfFetch(`/api/notes/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, content, notebookIdInt, userId }),
  });
  if (res.ok) {
    const updatedNote = await res.json();
    dispatch(updateNote(updatedNote));
    return updatedNote;
  }
};
// Thunk for deleting a note
export const deleteNoteThunk = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/notes/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  if (res.ok) {
    const deletedNote = await res.json();
    dispatch(deleteNote(id));
    return deletedNote;
  }
};
// clear all notes in the state once logout or delete a notebook
export const clearNotesThunk = () => async (dispatch) => {
  dispatch(clearNotes());
  return null;
};

// ---------------- Notes Reducer -------------
const initialState = {};

export default function notesReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case GET_NOTES: {
      newState = { ...state };
      action.notes.forEach((note) => (newState[note.id] = note));
      return newState;
    }
    case GET_ONE_NOTE: {
      newState = { ...state };
      newState[action.note.id] = action.note;
      return newState;
    }
    case CREATE_NOTE:
      newState = { ...state };
      newState[action.newNote.id] = action.newNote;
      return newState;
    case UPDATE_NOTE:
      newState = { ...state };
      newState[action.note.id] = action.note;
      return newState;
    case DELETE_NOTE:
      newState = { ...state };
      delete newState[action.note];
      return newState;
    case CLEAR_NOTES:
      return {};
    default:
      return state;
  }
}
