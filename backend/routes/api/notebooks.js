const express = require("express");
const asyncHandler = require("express-async-handler");
const { Notebook, Note } = require("../../db/models");

const router = express.Router();

// get a user's all notebooks - see users.js

// create a notebook
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, userId } = req.body;
    const newNotebook = await Notebook.create({
      name,
      userId,
    });
    return res.json(newNotebook);
  })
);

// get a notebook detail
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const notebookId = req.params.id;
    const notes = await Note.findAll({
      where: {
        notebookId,
      },
      order: [["updatedAt", "DESC"]],
    });
    return res.json(notes);
  })
);
// update a notebook info
router.put(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const notebookId = req.params.id;
    const notebook = await Notebook.findByPk(notebookId);

    const { name } = req.body;
    const updatedNotebook = await notebook.update({
      name,
    });
    return res.json(updatedNotebook);
  })
);
// delete a notebook
router.delete(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const notebookId = req.params.id;
    const notebook = await Notebook.findByPk(notebookId);
    await notebook.destroy();
    return res.json({ message: "notebook is successfully deleted" });
  })
);

module.exports = router;
