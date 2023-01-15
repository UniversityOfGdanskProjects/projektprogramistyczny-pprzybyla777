const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController")

router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)
    .patch(usersController.updateUser)
    
router.route("/deleteUser/:id")
    .delete(usersController.deleteUser)


module.exports = router