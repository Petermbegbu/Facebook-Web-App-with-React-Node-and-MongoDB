const router = require("express").Router();

const {createConversation, getConversations} = require("../controllers/conversationController");


router.post("/create", createConversation);

router.get("/get/:id", getConversations);


module.exports = router;