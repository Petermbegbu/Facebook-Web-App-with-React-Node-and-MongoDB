const router = require("express").Router();

const {addComment, getComments} = require("../controllers/commentController");


router.post("/add", addComment);

router.get("/get/:postId", getComments);


module.exports = router;