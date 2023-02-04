const Pizza  = require("../models/Pizza");
const Comment = require("../models/Comment");

const asyncHandler = require("express-async-handler");

// @desc Get pizzas
// @route GET /pizzas
// @access Private

const getPizzas = asyncHandler(async (req, res) => {

  const { name, gluten } = req.query;

  console.log("n", name, "g", gluten)

  if (name && gluten === "false") {

    console.log("1");

    const pizzas = await Pizza.find({
      name: { $regex: name, $options: "i"}, gluten: false 
    });

    if (pizzas.length === 0) {
      return res.status(404).json({ message: "No pizzas found" });
    }

    res.status(200).json(pizzas);

  } else if (name) {

    console.log("2");

    const pizzas = await Pizza.find({
      name: { $regex: name, $options: "i" },
    });

    if (pizzas.length === 0) {
      return res.status(404).json({ message: "No pizzas found" });
    }

    res.status(200).json(pizzas);

  } else if (gluten === "false") {

    console.log("3");

    const pizzas = await Pizza.find({
      gluten: false,
    });

    if (pizzas.length === 0) {
      return res.status(404).json({ message: "No pizzas found" });
    }

    res.status(200).json(pizzas);

  }
  else {

    console.log("4");

    const pizzas = await Pizza.find();

    if (!pizzas?.length) {
      return res.status(400).json({ message: "No pizzas found." });
    }

    res.json(pizzas);
  }
});


const createNewPizza = asyncHandler(async (req, res) => {

  const { name, toppings, small, large, flour, instructions, imageUrl, gluten } = req.body;

  console.log(req.body);

  if (!name || !toppings || !small || !large || !flour || !instructions || !imageUrl || !gluten) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const isGlutenTrue = gluten === "true";
  const toppingsArray = toppings.split(", ");

  const pizzaObject = {
    name: name,
    toppings: toppingsArray,
    price: {
      small: Number(small),
      large: Number(large),
    },
    flour,
    instructions,
    imageUrl: imageUrl,
    gluten: isGlutenTrue,
  };

  const pizza = await Pizza.create(pizzaObject);

  if (pizza) {
    res
      .status(201)
      .json({
        message: `New pizza ${name} has been created.`,
        newPizzaObj: pizza,
      });
  } else {
    res.status(400).json({ message: "Couldn't create new pizza." });
  }
});

// @desc Update a pizza
// @route PATCH /pizzas
// @access Private
const updatePizza = asyncHandler(async (req, res) => {

  const { id, name, toppings, small, large, flour, instructions, imageUrl, gluten } = req.body;

  console.log(req.body);

  if (!name || !toppings || !small || !large || !flour || !instructions || !imageUrl || !gluten) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const isGlutenTrue = gluten === "true";
  const toppingsArray = toppings.split(", ");

  console.log(id);

  const pizza = await Pizza.findOne({id}).exec();

  // console.log("B");

  console.log(pizza);

  if (!pizza) {
    return res.status(400).json({ message: "Pizza not found" });
  }

  // console.log("C");

  pizza.name = name;
  pizza.toppings = toppingsArray;
  pizza.price.small = small;
  pizza.price.large = large;
  pizza.flour = flour;
  pizza.instructions = instructions;
  pizza.imageUrl = imageUrl;
  pizza.gluten = isGlutenTrue

  // console.log("D");

  const updatedPizza = await pizza.save();

  res.status(200).json({ message: `Pizza with id: ${id} updated!`, updatedPizza: updatedPizza});
});

// @desc Delete a pizza
// @route DELETE /pizzas/deletePizza/:id
// @access Private
const deletePizza = asyncHandler(async (req, res) => {

  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Pizza id is required" });
  }

  const pizza = await Pizza.findOne({id}).exec();

  if (!pizza) {
    return res.status(400).json({ message: "Pizza not found" });
  }

  const result = await Pizza.deleteOne(pizza);

  const resultMsg = `Pizza: ${pizza.name} with ID: ${pizza.id} has been deleted`;

  res.json({ message: resultMsg, id: pizza.id});
});

// @desc Add new comment to pizza
// @route POST /pizzas/:id/addComment
// @access Private
const addComment = asyncHandler(async (req, res) => {

  const id  = req.params

  const newComment  = req.body;

  // console.log("id oraz req.body: ");

  // console.log(id);

  // console.log(newComment);


  if (!newComment) {
    return res.status(400).json({ message: "New comment is required!" });
  }

  const pizza = await Pizza.findOne(id).exec();

  if (!pizza) {
    return res.status(400).json({ message: "Pizza not found" });
  }

  const newAddedComment = new Comment(newComment);

  newAddedComment.save()

  newIdObj = newAddedComment._id

  console.log("newIdObj: ", newIdObj);

  pizza.comments.push(newIdObj);

  // console.log(pizza.comments);

  pizza.save();

  const pizzaWithNewComment = await Pizza.findOne(id).populate("comments").exec()

  res.json({message: `New comment added!`, newPizza: pizzaWithNewComment});
});


// const searchByPizzaName = async (req, res) => {

//   if (res.params.name) {
//     try {
      
//       const searchResults = await Pizza.find({name: { $regex: req.params.name, $options: "i" }});
//       res.status(200).json(searchResults);

//     } catch (error) {
//       console.log(error);
//       res.status(404).json({message: " No Pizzas found"})
//     }
//   } else {
//     res.status(404).json({message: "No pizza name passed"})
//   }
// }

module.exports = {
  getPizzas,
  createNewPizza,
  updatePizza,
  deletePizza,
};
