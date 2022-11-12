const router = require("express").Router();

const {updateUser, deleteUser, getUser, follow, unfollow} = require("../controllers/userController");


router.put("/user/update/:id", updateUser);

router.delete("/user/delete/:id", deleteUser);

router.get("/user/get/:id", getUser);

router.put("/user/follow/:id", follow);

router.put("/user/unfollow/:id", unfollow);


module.exports = router;