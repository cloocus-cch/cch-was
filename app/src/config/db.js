"use strict";

const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.config.DB_HOST,
    user: process.config.DB_USER,
    password: process.config.DB_PSWORD,
    database: process.config.DB_DATABASE,
    port: 3306,
});

db.connect();

module.exports = db;