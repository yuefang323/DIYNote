const express = require("express");
const asyncHandler = require("express-async-handler");
const { Note } = require("../../db/models");
const router = express.Router();

// get all notes of a login user
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const notes = await Note.findAll({
      where: {
        userId,
      },
      order: [["updatedAt", "DESC"]],
    });

    return res.json(notes);
  })
);
// post a new note
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, title, content, notebookId } = req.body;

    const newNote = await Note.create({
      userId,
      title,
      content,
      notebookId,
    });

    const notes = await Note.findAll({
      where: {
        userId,
        notebookId,
      },
      order: [["updatedAt", "DESC"]],
    });
    return res.json(notes);
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

module.exports = router;
