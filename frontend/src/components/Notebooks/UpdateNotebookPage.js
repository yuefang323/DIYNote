import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "./Notebooks.css";

import * as notebookActions from "../../store/notebook";

function UpdateNotebookForm({ showModal, setShowModal }) {
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
    if (inputVal.length < 1) validateErrors.push("Title is required");
    // if (inputVal.length > 100) validateErrors.push("Title is too long");
    if (validateErrors.length > 0) {
      setErrors(validateErrors);
      return;
    }

    dispatch(notebookActions.updateNotebookThunk(inputVal, userId));
    setShowModal(false);
  };
  return (
    <form onSubmit={handleSubmit} className="update-notebook-form">
      <h2 className="update-notebook-title">Update a new notebook</h2>
      <ul className="update-notebook-errors">
        {errors && errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
      <div className="notebook-update-form">
        <label className="update-notebook-label">
          Name:
          <input
            className="update-notebook-input"
            type="text"
            name="title"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </label>
        <button className="update-notebook-submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default UpdateNotebookForm;
