"use strict";

const mysql = require('mysql');

const db = mysql.createConnection({
    host: "10.101.192.5",
    user: "root",
    password: "asdf1234",
    database: "user_db",
    port: 3306,
});

db.connect();

module.exports = db;