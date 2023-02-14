const router = require("express").Router();

const {signup, signin, logout} = require("../controllers/authController");



router.post("/signup", signup);

router.post("/signin", signin);

router.get("/logout", logout)

module.exports = router;