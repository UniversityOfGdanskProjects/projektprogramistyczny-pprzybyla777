const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}, { password: 0 }).lean().exec();

  if (!users?.length) {
    return res.status(400).json({ message: "Bad request, no users found." });
  }
  res.json(users);
});

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, roles } = req.body;

  if (!username || !password || !Array.isArray(roles) || !roles.length) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const duplicate = await User.findOne({ username: username }).lean().exec();

  if (duplicate) {
    return res.status(409).json({ message: "Username is already taken" });
  }

  const hashedPsswd = await bcrypt.hash(password, 10);

  const userObject = {
    username: username,
    password: hashedPsswd,
    roles: roles,
  };

  const user = await User.create(userObject);

  if (user) {
    res.status(201).json({ message: `New user ${username} created` });
  } else {
    res.status(400).json({ message: "Couldn't create a new user" });
  }
});

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  const { id, username, roles, password } = req.body;

  if (!id || !username || !Array.isArray(roles) || !roles.length) {
    return res
      .status(400)
      .json({ message: "All fields except password are required" });
  }

  const user = await User.findOne({ _id: id }).exec();

  // console.log(user)

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const duplicateQuery = { username: username, _id: { $ne: id } };

  const duplicate = await User.find(duplicateQuery).lean().exec();

  console.log(duplicate)
  console.log(duplicate.length)

  if (duplicate.lenth !== 0) {
    return res.status(409).json({ message: "Username is already taken" });
  }

  user.username = username;
  user.roles = roles;

  if (password) {
    user.password = await bcrypt.hash(password, 10);
  }

  const updatedUser = await user.save();

  res.json({ message: `${updatedUser.username} updated` });
});

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  const user = await User.findOne({ _id: id }).exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const result = await User.deleteOne(user)

  const resultMsg = `Username: ${user.username} with ID: ${user._id} has been deleted`

  res.json(resultMsg)
});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
