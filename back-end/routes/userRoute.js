const router = require("express").Router();

const {updateUser, deleteUser, getUser, getCurrentUser, follow, unfollow, followings} = require("../controllers/userController");


router.patch("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);

router.get("/get/:id", getUser);

router.get("/current-user", getCurrentUser);

router.put("/follow/:id", follow);

router.put("/unfollow/:id", unfollow);

router.get("/followings/:id", followings)


module.exports = router;