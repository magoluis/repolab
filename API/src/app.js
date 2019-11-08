const express = require("express");
const { json } = require("express");

const userRoutes = require("./routes/userRoutes");
const tweetRoutes = require("./routes/tweetRouters");

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(json());

app.use("/user", userRoutes);
app.use("/tweet", tweetRoutes);

module.exports = app;