"use strict";

const users = {
    id: ["wwrim","나개발","강팀장","cch"],
    psword: ["1234","1234","123456","1234"],
};

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

       if(users.id.includes(id)) {
           const idx = users.id.indexOf(id);
           if(users.psword[idx]===psword){
               return res.json({
                   success: true,
                   msg: "로그인 성공!"
               });
           }
       }

       return res.json({
           success: false,
           msg: "로그인에 실패하셨습니다.",
       });
    },
};

module.exports = {
    output,
    process,
};
