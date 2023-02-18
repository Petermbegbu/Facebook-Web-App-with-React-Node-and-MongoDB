const router = require("express").Router();

const {createMessage} = require("../controllers/messageController");


router.post("/create", createMessage);




module.exports = router;