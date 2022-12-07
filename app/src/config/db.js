"use strict";

const mysql = require('promise-mysql');

const db = mysql.createConnection({
    host: "34.64.230.109",
    user: "root",
    password: "1234",
    database: "cch-sql",
});

db.connect();

module.exports = db;