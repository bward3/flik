const router = require("express").Router();
const { getAllFilms, createFilm } = require("../../controllers/filmController");

router.route("/").get(getAllFilms);

router.route("/").post(createFilm);

module.exports = router;
