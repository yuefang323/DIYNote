import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import * as notebookActions from "../../store/notebook";
import * as noteActions from "../../store/note";
import "./Navigation.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    dispatch(notebookActions.logout());
    dispatch(noteActions.clearNotesThunk());
  };

  return (
    <>
      <button onClick={openMenu}>
        <i className="fa-solid fa-user fa-2x" />
      </button>
      <div className="profile-dropdown">
      {showMenu && (
        <div className="profile-dropdown-list">
          <li className="profile-dropdown-list item">{user.username}</li>
          <li className="profile-dropdown-list item">{user.email}</li>
          <li className="profile-dropdown-list item">
            <button className="logout-btn" onClick={logout}>
              Log Out
            </button>
          </li>
        </div> 
      )}
      </div>
    </>
  );
}

export default ProfileButton;
