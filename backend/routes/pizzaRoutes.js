const express = require("express");
const router = express.Router();
const pizzasController = require("../controllers/pizzasController");
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router
  .route("/")
  .get(pizzasController.getAllPizzas)
  .post(pizzasController.createNewPizza);

router.route("/:id").get(pizzasController.getOnePizza)

router.route("/:id/addComment").post(pizzasController.addComment);

router.route("/updatePizza/:id").patch(pizzasController.updatePizza);

router.route("/deletePizza/:id").delete(pizzasController.deletePizza);

module.exports = router;
