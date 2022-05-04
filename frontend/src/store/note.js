import { csrfFetch } from "./csrf";

// -------- Constants --------
const GET_NOTES = "notes/GET_NOTES";
const CREATE_NOTE = "notes/CREATE_NOTE";
const UPDATE_NOTE = "notes/UPDATE_NOTE";
const DELETE_NOTE = "notes/DELETE_NOTE";

// ---------------- Actions -----------
// GET a user's all notes
export const getAllNotes = (notes) => ({
  type: GET_NOTES,
  notes,
});
// GET a notebook's all notes
// export const getNotebook = (notebook) => ({
//   type: GET_NOTEBOOK,
//   payload: notebook,
// });
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
// Thunk for getting a notebook's all notes
// export const getNotebookThunk = (notebookId) => async (dispatch) => {
//   const res = await csrfFetch(`/api/notebooks/`);
//   if (res.ok) {
//     const notebookNotes = await res.json();
//     dispatch(getNotebook(notebookNotes));
//     if(!notebookNotes) {
//         return "bad"
//     }
//     return "ok"
//   }
// };
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
// export const updateNoteThunk = (id, title, content, userId) => async (dispatch) => {
//   const res = await csrfFetch(`/api/notes/${id}`, {
//     method: "PUT",
//     body: JSON.stringify({ title, content }),
//   });
//   if (res.ok) {
//     const newNote = await res.json();
//     dispatch(updateNotebook(updatedNotebook));
//     return updatedNotebook;
//   }
// };
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

const initialState = {};

export default function notesReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case GET_NOTES: {
      newState = { ...state };
      action.notes.forEach((note) => (newState[note.id] = note));
      return newState;
    }
    // case GET_NOTEBOOK: {
    //   return { ...state, notebook: action.payload };
    // }
    case CREATE_NOTE:
      newState = { ...state };
      // console.log(action.newNotebook.newNotebook)
      newState[action.newNote.id] = action.newNote;
      return newState;
    // case UPDATE_NOTEBOOK:
    //   newState = { ...state };
    //   newState[action.notebook.id] = action.notebook;
    //   return newState;
    case DELETE_NOTE:
      newState = { ...state };
      // console.log("=====action.notebook.deletedNotebook.id" + action.notebook);
      delete newState[action.note];
      return newState;
    default:
      return state;
  }
}
