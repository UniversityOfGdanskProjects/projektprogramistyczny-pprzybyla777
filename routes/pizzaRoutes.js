const express = require("express");
const router = express.Router();
const pizzasController = require("../controllers/pizzasController")

router.route('/')
    .get(pizzasController.getAllPizzas)
    .post(pizzasController.createNewPizza)
    .patch(pizzasController.updatePizza)
    
router.route("/deletePizza/:id")
    .delete(pizzasController.deletePizza)


module.exports = router