const index = require("express").Router();
const comicRoutes = require("./app");

index.use("/api/comics", comicRoutes);

module.exports = index;
