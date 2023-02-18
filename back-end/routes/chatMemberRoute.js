const router = require("express").Router();

const {createMember, getMembers} = require("../controllers/chatMemberController");


router.post("/create", createMember);

router.get("/get/:id", getMembers);


module.exports = router;