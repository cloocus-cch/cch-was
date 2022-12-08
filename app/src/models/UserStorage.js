"use strict";

const db = require("../config/db");

class UserStorage {
    static getUsers(isAll, ...fields) {
    }

    static getUsersInfo(id) {
        new Promise((resolve, reject) =>{
            const query ="SELECT * FROM users id = ?"
            db.query(query, [id], (err, data) =>{
                if (err) reject(err);
                console.log(data[0]);
                resolve(data[0]);
            }); 
        });
        
    }

    static async save(userInfo) {
        new Promise((resolve, reject) =>{
            const query ="INSERT INTO users(id, name, psword) VALUES(?, ?, ?);"
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword], (err) =>{
                if (err) reject(err);
                console.log(data[0]);
                resolve({success: true});
            }); 
        });
    }
}

module.exports = UserStorage;

