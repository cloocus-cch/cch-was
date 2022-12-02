"use strict";

const UserStorage = require("./UserStorage");

class User{
  constructor(body){
    this.body=body;
  }

  login() {
    const { id, psword } = UserStorage.getUsersInfo("id", "psword");

    if
  }

}

module.exports = User