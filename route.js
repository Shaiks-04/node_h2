const { login, signup, main, defaultt } = require('../modules/api');

const route = require("express").Router();

route.get("/", defaultt);
route.get("/login", login);
route.post("/signup", signup);
route.get("/api/main", main);

module.exports = route;
