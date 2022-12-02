"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
       const id = req.body.id,  //입력된 id를 불러옴
       psword = req.body.psword; //입력된 pw 불러옴
       
      const users = UserStorage.getUsers("id", "psword")

       const response = {};
       if(users.id.includes(id)) {
           const idx = users.id.indexOf(id);
           if(users.psword[idx]===psword){
               response.success = true;
               return res.json(response);
           }
       }

       response.success = false;
       response.msg = "로그인 실패";
       return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
