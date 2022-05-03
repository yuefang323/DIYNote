const express = require("express");
const asyncHandler = require("express-async-handler");
const { Note } = require("../../db/models");
const router = express.Router();

// get all notes of a login user - see users.js

// post a new note
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { title, content, notebookId, userId } = req.body;

    const newNote = await Note.create({
      title,
      content,
      notebookId,
      userId,
    });
    return res.json(newNote);
  })
);
// get a specific note
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const noteId = req.params.id;
    const note = await Note.findByPk(noteId);
    return res.json(note);
  })
);
// update a note
router.put(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const noteId = req.params.id;
    const note = await Note.findByPk(noteId);
    const { title, content, notebookId, userId } = req.body;
    const newNote = await note.update({
      title,
      content,
      notebookId,
      userId,
    });
    return res.json(newNote);
  })
);
// delete a note
router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const noteId = req.params.id;
    const note = await Note.findByPk(noteId);
    await note.destroy();
    return res.json({ message: "note is successfully deleted" });
  })
);

module.exports = router;
