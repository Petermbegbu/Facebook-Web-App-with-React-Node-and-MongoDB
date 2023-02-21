const router = require("express").Router();

const {createMessage, getMessages} = require("../controllers/messageController");


router.post("/create", createMessage);

router.get("/get/:id", getMessages);



module.exports = router;