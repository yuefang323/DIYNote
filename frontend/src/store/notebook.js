import { csrfFetch } from "./csrf";

// -------- Constants --------
const GET_ALL_NOTEBOOKS = "notebooks/GET_ALL_NOTEBOOKS";
const GET_ONE_NOTEBOOK = 'notebooks/GET_ONE_NOTEBOOK'
const CREATE_NOTEBOOK = "notebooks/CREATE_NOTEBOOK";
const UPDATE_NOTEBOOK = "notebooks/UPDATE_NOTEBOOK";
const DELETE_NOTEBOOK = "notebooks/DELETE_NOTEBOOK";
const CLEAR_NOTEBOOKS = "notebooks/CLEAR_NOTEBOOKS";

// ---------------- Actions -----------
// GET a user's all notebooks
export const getAllNotebooks = (notebooks) => ({
  type: GET_ALL_NOTEBOOKS,
  notebooks,
});
// GET a notebook 
export const getOneNotebook = (notebook) => ({
  type: GET_ONE_NOTEBOOK,
  notebook,
});
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
// CLEAR notebooks in a state
const clearNotebooks = () => ({
  type: CLEAR_NOTEBOOKS,
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
// Thunk for getting a notebook 
export const getOneNotebookThunk = (notebookId) => async (dispatch) => {
  const response = await csrfFetch(`/api/notebooks/${notebookId}`);
  if (response.ok) {
    const notebook = await response.json();
    dispatch(getAllNotebooks(notebook));
    return notebook;
  }
};
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
  // console.log('.....oooooo',id)
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
// clear all notebooks in the state once logout
export const logout = () => async (dispatch) => {
  dispatch(clearNotebooks());
  return null;
};

// ---------------- Notebooks Reducer -------------
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
    // case GET_ONE_NOTEBOOK: {
    //   newState = { ...state };
    //   action.notebooks.forEach(
    //     (notebook) => (newState[notebook.id] = notebook)
    //   );
    //   return newState;
    // }
    case CREATE_NOTEBOOK:
      newState = { ...state };
      newState[action.newNotebook.id] = action.newNotebook;
      return newState;
    case UPDATE_NOTEBOOK:
      newState = { ...state };
      newState[action.notebook.id] = action.notebook;
      return newState;
    case DELETE_NOTEBOOK:
      newState = { ...state };
      delete newState[action.notebook];
      return newState;
    case CLEAR_NOTEBOOKS:
      return {};
    default:
      return state;
  }
}
