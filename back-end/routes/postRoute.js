const router = require("express").Router();

const {createPost, updatePost, deletePost, likePost, getPost, getTimelinePosts, 
    getUserPosts, getPostImage} = require("../controllers/postController");


router.post("/create", createPost);

router.get("/get/:id", getPost);

router.get("/get/timeline/:id", getTimelinePosts);

router.get("/get/profile/:id", getUserPosts);

router.put("/update/:id", updatePost);

router.delete("/delete/:id", deletePost);

router.patch("/like/:id", likePost);

router.get("/image/:id", getPostImage)



module.exports = router;