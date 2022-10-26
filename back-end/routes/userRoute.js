const router = require("express").Router();

const {getUsers} = require("../controllers/userController");


router.get("/users", getUsers);

module.exports = router;