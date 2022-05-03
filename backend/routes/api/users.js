const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie } = require("../../utils/auth");
const { User, Notebook, Note } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

// validate signup request body
const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

// get a user's all notebooks 
router.get("/:userId/notebooks", asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const notebooks = await Notebook.findAll({
    where: {
      userId, 
    }, 
    order: [["updatedAt", "DESC"]],
  })
  return res.json(notebooks); 
})); 
// get a user's all notebooks 
router.get("/:userId/notebooks", asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const notebooks = await Notebook.findAll({
    where: {
      userId, 
    }, 
    order: [["updatedAt", "DESC"]],
  })
  return res.json(notebooks); 
})); 
// get a user's all notes
router.get("/:userId/notes", asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const notes = await Note.findAll({
    where: {
      userId, 
    }, 
    order: [["updatedAt", "DESC"]],
  })
  return res.json(notes); 
})); 

module.exports = router;
