"use strict";
//모듈
const express = require ('express');
const app = express();

const port = 8080;

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);


module.exports = app;