const router = require("express").Router();

const {updateUser, deleteUser, getUser, getCurrentUser, follow, unfollow,
    followers, followings, getAllUsers, getFindFriends} = require("../controllers/userController");


router.patch("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);

router.get("/get/:id", getUser);

router.get("/all", getAllUsers);

router.get("/find-friends/:id", getFindFriends);

router.get("/followings/:id", followings);

router.get("/followers/:id", followers);

router.get("/current-user", getCurrentUser);

router.put("/follow/:id", follow);

router.put("/unfollow/:id", unfollow);



module.exports = router;