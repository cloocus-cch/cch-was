"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);


console.log(id);
console.log(psword);


function login() {
    const req = {
        id: id.value,
        psword : psword.value,
    }
    
}