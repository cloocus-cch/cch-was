"use strict";

const mysql = require('mysql');

const db = mysql.createConnection({
    host: "34.64.230.109",
    user: "root",
    password: "1234",
    database: "cch-sql",
});

db.connect();

module.exports = db;

//연결 안되면 구글DB 연결 참고