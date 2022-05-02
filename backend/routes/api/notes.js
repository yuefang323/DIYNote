const express = require("express");
const asyncHandler = require("express-async-handler");
const { Note } = require("../../db/models");
const router = express.Router(); 

// get all notes of a 
router.get("/:userId", asyncHandler(async(req, res) => {

    const userId = req.params.userId;
    const notes = await Note.findAll({
      where: {
        userId: userId
      },
      order: [["updatedAt", "DESC"]],
    })
  
    return res.json(notes)
  }))