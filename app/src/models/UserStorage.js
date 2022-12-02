"use strict";

class UserStorage {
    static #users = {
        id: ["wwrim","나개발","강팀장","cch"],
        psword: ["1234","1234","123456","1234"],
        name: ["우리밋","나개발","강팀장","찬회"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }

}


module.exports = UserStorage;