const router = require("express").Router();
const userRoutes = require("./userRoutes");
const filmRoutes = require("./filmRoutes");

router.use("/users", userRoutes);
router.use("/films", filmRoutes);

module.exports = router;
