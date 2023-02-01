const express = require("express");
const router = express.Router();
const catController = require("../controllers/catController")

router.route('/')
    .get(catController.getAllCats)
    .post(catController.createNewCat)
    .patch(catController.updateCat)
    .delete(catController.deleteCat)

module.exports = router