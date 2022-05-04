import { csrfFetch } from "./csrf";

// -------- Constants --------
const GET_ALL_NOTEBOOKS = "notebooks/GET_ALL_NOTEBOOKS";
// const GET_NOTEBOOK = "notebooks/GET_NOTEBOOK";
const CREATE_NOTEBOOK = "notebooks/CREATE_NOTEBOOK";
const UPDATE_NOTEBOOK = "notebooks/UPDATE_NOTEBOOK";
const DELETE_NOTEBOOK = "notebooks/DELETE_NOTEBOOK";

// ---------------- Actions -----------
// GET a user's all notebooks
export const getAllNotebooks = (notebooks) => ({
  type: GET_ALL_NOTEBOOKS,
  notebooks,
});
// GET a notebook's all notes
// export const getNotebook = (notebook) => ({
//   type: GET_NOTEBOOK,
//   payload: notebook,
// });
// POST a new notebook
export const createNotebook = (newNotebook) => ({
  type: CREATE_NOTEBOOK,
  newNotebook,
});
// UPDATE a notebook
export const updateNotebook = (notebook) => ({
  type: UPDATE_NOTEBOOK,
  notebook,
});
// DELETE a notebook
export const deleteNotebook = (notebook) => ({
  type: DELETE_NOTEBOOK,
  notebook,
});

// ---------------- Thunk Actions -------------
// Thunk for getting all notebooks
export const getAllNotebooksThunk = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${userId}/notebooks`);
  if (response.ok) {
    const notebooks = await response.json();
    dispatch(getAllNotebooks(notebooks));
    return notebooks;
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
// Thunk for creating a new notebook
export const createNotebookThunk = (name, userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/notebooks/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, userId }),
  });
  if (res.ok) {
    const newNotebook = await res.json();
    dispatch(createNotebook(newNotebook));
    return newNotebook;
  }
};
// Thunk for updating a notebook
export const updateNotebookThunk = (id, name) => async (dispatch) => {
  const res = await csrfFetch(`/api/notebooks/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name }),
  });
  if (res.ok) {
    const updatedNotebook = await res.json();
    dispatch(updateNotebook(updatedNotebook));
    return updatedNotebook;
  }
};
// Thunk for deleting a notebook
export const deleteNotebookThunk = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/notebooks/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  if (res.ok) {
    const deletedNotebook = await res.json();
    dispatch(deleteNotebook(id));
    return deletedNotebook;
  }
};

const initialState = {};

export default function notebooksReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case GET_ALL_NOTEBOOKS: {
      newState = { ...state };
      action.notebooks.forEach(
        (notebook) => (newState[notebook.id] = notebook)
      );
      return newState;
    }
    // case GET_NOTEBOOK: {
    //   return { ...state, notebook: action.payload };
    // }
    case CREATE_NOTEBOOK:
      newState = { ...state };
      // console.log(action.newNotebook.newNotebook)
      newState[action.newNotebook.id] = action.newNotebook;
      return newState;
    case UPDATE_NOTEBOOK:
      newState = { ...state };
      newState[action.notebook.id] = action.notebook;
      return newState;
    case DELETE_NOTEBOOK:
      newState = { ...state };
      // console.log("=====action.notebook.deletedNotebook.id" + action.notebook);
      delete newState[action.notebook];
      return newState;
    default:
      return state;
  }
}
