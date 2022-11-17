const router = require("express").Router();
const {
  getSingleUser,
  createUser,
  login,
} = require("../../controllers/userController");

const { authMiddleware } = require("../../utils/auth");

router.route("/:id").get(getSingleUser);

router.route("/").post(createUser);

router.route("/me").get(authMiddleware, getSingleUser);

router.route("/login").post(login);

module.exports = router;
