"use strict";

const db = require("../config/db");

class UserStorage {
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = user[info][idx];
            return newUser;
        }, {});
    }

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;

        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    static getUsers(isAll, ...fields) {
    }

    static getUsersInfo(id) {
        new Promise((resolve, rehect) =>{
            db.query("SELECT * FROM users id = ?", [id], (err, data) =>{
                console.log(data[0]);
                resolve(data[0]);//33 7:47
            });
        })
        
    }

    static async save(userInfo) {
    }
}

module.exports = UserStorage;