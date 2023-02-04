const express = require("express");
const router = express.Router();
const pizzasController = require("../controllers/pizzasController");
const verifyJWT = require("../middleware/verifyJWT");

// router.use(verifyJWT)

router
  .route("/")
  .get(pizzasController.getPizzas)
  .post(verifyJWT, pizzasController.createNewPizza)
  .patch(verifyJWT, pizzasController.updatePizza)
  .delete(verifyJWT, pizzasController.deletePizza);

// router.route("/search/:name").get(pizzasController.searchByPizzaName);


// router.route("/:id/addComment").post(pizzasController.addComment);

module.exports = router;
