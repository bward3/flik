// import Film model
const { Film } = require("../models");

module.exports = {
  //get one film
  getAllFilms(req, res) {
    Film.find()
      .then(async (films) => {
        return res.json(films);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  createFilm(req, res) {
    Film.create(req.body)
      .then((film) => res.json(film))
      .catch((err) => res.status(500).json(err));
  },
};
