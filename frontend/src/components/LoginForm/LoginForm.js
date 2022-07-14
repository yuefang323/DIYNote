import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import DemoUser from "../DemoUser";
import "./LoginForm.css";

function LoginForm({ setSignupModal }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <img src="/favicon.png" alt="DIYnote"></img>
        <h3>Welcome to DIYnote</h3>
      </div>
      <ul className="errors">
        {errors.map((error, idx) => (
          <li key={idx} className="errors">{error}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          placeholder="Username/Email"
          required
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>
        <button type="submit" className="login-button">
          Log In
        </button>
        <DemoUser />
        <div
                    className="switch-to-signup"
                    type="button"
                    onClick={() => setSignupModal(true)}
                >
                    Don't have an account? Create account
                </div>
    </form>
  );
}

export default LoginForm;
