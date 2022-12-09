"use strict";

const mysql = require('mysql');

const db = mysql.createConnection({
    host: "34.64.250.101",
    user: "root",
    password: "asdf1234",
    database: "user_db",
    port: 3306,
});

db.connect();

module.exports = db;

// //연결 안되면 구글DB 연결 참고

// const mysql = require('promise-mysql');
// const fs = require('fs');
// const SQLsa = require("../config/chchoi-project-0880778e381e.json")

// const createTcpPool = async config => {
//   const dbConfig = {
//     host: '34.64.250.101', // e.g. '127.0.0.1'
//     port: '3306', // e.g. '3306'
//     user: 'root', // e.g. 'my-db-user'
//     password: 'asdf1234', // e.g. 'my-db-password'
//     database: 'user_db', // e.g. 'my-database'
    
//     socketPath: '/cch-sql/chchoi-project:asia-northeast3:cch-sql',

//     ...config,
//   };

//   console.log(dbConfig)
//   return mysql.createPool(dbConfig);
  
// };


// module.exports = createTcpPool;