import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "./Notebooks.css";

import * as notebookActions from "../../store/notebook";

function CreateNotebookPage({ showModal, setShowModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;

  const [inputVal, setInputVal] = useState("");
  const [errors, setErrors] = useState([]);

  if (!sessionUser) return <Redirect to="/signup" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = [];
    if (inputVal.length < 1) validateErrors.push("Notebook name is required");
    if (validateErrors.length > 0) {
      setErrors(validateErrors);
      return;
    }

    dispatch(notebookActions.createNotebookThunk(inputVal, userId));
    setShowModal(false);
  };
  return (
    <form onSubmit={handleSubmit} className="create-notebook-form">
      <h2 className="create-notebook-name">Create a new notebook</h2>
      <ul className="create-notebook-errors">
        {errors && errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
      <div className="notebook-create-form">
        <label className="create-notebook-label">
          Name:
          <input
            className="create-notebook-input"
            type="text"
            name="name"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </label>
        <button className="create-notebook-submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CreateNotebookPage;
