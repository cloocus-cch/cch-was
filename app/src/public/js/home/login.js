"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);


function login() {
    const req = {
        id: id.value,
        psword : psword.value,
    };

    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    }).then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/";
            
        } else{
            alert(res.msg)
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    })
}
//promise 형태로 콘솔에 출력이 되는데 promise가 뭔지 모른다면 추가 공부 필요
