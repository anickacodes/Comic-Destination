const Comic = require("../models/Comics");

module.exports = {
  findAll: function (req, res) {
    Comic.find(req.query)
      .then((comics) => res.json(comics))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    Comic.findById(req.params.id)
      .then((comic) => res.json(comic))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    Comic.create(req.body)
      .then((newComic) => res.json(newComic))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    Comic.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((comic) => {
        if (!comic) {
          return res.status(404).json({ error: "Comic not found" });
        }
        res.json(comic);
      })
      .catch((err) => res.status(422).json(err));
  },
    remove: function (req, res) {
      Comic.findById({ _id: req.params.id })
      .then((comic) => {
          if (!comic) {
            return res.status(404).json({ error: 'Comic not found' });
          }
          return comic.remove();
        })
        .then((allComics) => res.json(allComics))
        .catch((err) => res.status(422).json(err));
    }
};
