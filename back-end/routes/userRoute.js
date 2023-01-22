const router = require("express").Router();

const {updateUser, deleteUser, getUser, follow, unfollow} = require("../controllers/userController");


router.put("/update/:id", updateUser);

router.delete("/delete/:id", deleteUser);

router.get("/get/:id", getUser);

router.put("/follow/:id", follow);

router.put("/unfollow/:id", unfollow);


module.exports = router;