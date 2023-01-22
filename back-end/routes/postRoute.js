const router = require("express").Router();

const {createPost, updatePost, deletePost, likePost, getPost, getTimelinePosts} = require("../controllers/postController");


router.post("/create", createPost);

router.get("/get/:id", getPost);

router.get("/get/all/timeline", getTimelinePosts);

router.put("/update/:id", updatePost);

router.delete("/delete/:id", deletePost);

router.put("/like/:id", likePost);



module.exports = router;