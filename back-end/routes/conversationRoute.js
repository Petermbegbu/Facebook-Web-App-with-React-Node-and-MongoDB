const router = require("express").Router();

const {createConversation, getConversations, 
    getConversation} = require("../controllers/conversationController");


router.post("/create", createConversation);

router.get("/get/:id", getConversations);

router.get("/get/single/:id1/:id2", getConversation);



module.exports = router;