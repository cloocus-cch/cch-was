"use strict";

const user = {
    id: ["wwrim","나개발","강팀장"],
    psword: ["1234","1234","123456"],
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
        const id = req.body.id,
        psword = req.body.psword;

        if(user.id.includes(id)) {
            const idx = user.id.indexOf(id);
            if(users.psword[idx]===psword){
                return res.json({
                    success: true,
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

//check