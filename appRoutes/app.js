const app = require("express").Router();
const comicsController = require("../controllers/comicControllers");

app.route("/").get(comicsController.findAll).post(comicsController.create);

app
  .route("/:id")
  .get(comicsController.findById)
  .put(comicsController.update)
  .delete(comicsController.remove);

module.exports = app;
