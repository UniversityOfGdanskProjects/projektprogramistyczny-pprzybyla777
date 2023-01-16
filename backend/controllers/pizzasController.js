const Pizza = require("../models/Pizza");
const asyncHandler = require("express-async-handler");

// @desc Get all pizzas
// @route GET /pizzas
// @access Private
const getAllPizzas = asyncHandler(async (req, res) => {

  const pizzas = await Pizza.find({}).lean().exec();

  if (!pizzas?.length) {
    return res.status(400).json({ message: "No pizzas found." });
  }
  res.json(pizzas);
});


// @desc Create new pizza
// @route POST /pizzas
// @access Private
const createNewPizza = asyncHandler(async (req, res) => {

  const { title, topings, price, imageUrl } = req.body;

  if (!title || !topings || !price?.small || !price?.large) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const pizzaObject = {
    title: title,
    topings: topings,
    price: price,
    imageUrl: imageUrl
    };

  const pizza = await Pizza.create(pizzaObject);

  if (pizza) {
    res.status(201).json({ message: `New pizza ${title} has been created.` });
  } else {
    res.status(400).json({ message: "Couldn't create new pizza." });
  }
});

// @desc Update a pizza
// @route PATCH /pizzas
// @access Private
const updatePizza = asyncHandler(async (req, res) => {

  const { id, title, topings, price, imageUrl, notes } = req.body;

  if (!id || !title || !topings || !price?.small || !price?.large || !imageUrl) {
    return res
      .status(400)
      .json({ message: "All fields except notes are required" });
  }

  const pizza = await Pizza.findOne({ _id: id }).exec();


  if (!pizza) {
    return res.status(400).json({ message: "User not found" });
  }

  pizza.title = title;
  pizza.topings = topings;
  pizza.price = price;
  pizza.imageUrl = imageUrl;

  if (notes) {
    pizza.notes = notes;
  }

  const updatedPizza = await pizza.save();

  res.json({ message: `${pizza.title} updated` });
});

// @desc Delete a pizza
// @route DELETE /pizzas/deletePizza/:id
// @access Private
const deletePizza = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Pizza ID is required" });
  }

  const pizza = await Pizza.findOne({ _id: id }).exec();

  if (!pizza) {
    return res.status(400).json({ message: "Pizza not found" });
  }

  const result = await Pizza.deleteOne(pizza)

  const resultMsg = `Pizza: ${pizza.title} with ID: ${pizza._id} has been deleted`

  res.json(resultMsg)
});

module.exports = {
  getAllPizzas,
  createNewPizza,
  updatePizza,
  deletePizza,
};