import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormPage({ setSignupModal }) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(
                sessionActions.signup({ email, username, password })
            ).catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
        }
        return setErrors([
            "Confirm Password field must be the same as the Password field",
        ]);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <img src="/favicon.png" alt="DIYnote"></img>
                <h3 className="welcome-msg">Welcome to DIYnote</h3>
                <ul className="errors">
                    {errors.map((error, idx) => (
                        <li key={idx} className="errors">
                            {error}
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                />
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirmed Password"
                    required
                />
                <button className="signup-btn" type="submit">
                    Sign Up
                </button>
                <div
                    className="switch-to-login"
                    type="button"
                    onClick={() => setSignupModal(false)}
                >
                    Already have an account? <span>Log in</span>
                </div>
            </form>
        </>
    );
}

export default SignupFormPage;
