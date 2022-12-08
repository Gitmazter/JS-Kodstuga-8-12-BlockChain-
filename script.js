// Kryptering vs Hashning
// Kryptering kan avkrypteras
// Hashning är en form av kryptering men kan inte "avhashas"

// Hashing + Salt 

/* let message = "testar";
console.log("message: ", message)
let msgInt8 = new TextEncoder().encode(message);
console.log("msgInt8:", msgInt8);

let hashBuffer = await crypto.subtle.digest("SHA-256", msgInt8);
console.log("hashbuffer:", hashBuffer);

let hashArray = Array.from(new Uint8Array(hashBuffer));
console.log("hashArray:", hashArray);

let HashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
console.log("HashHex:", HashHex); */


// EXAMPLE ENCRYPTION DIV
const example = document.querySelector("#example_input")
const output = document.querySelector("#output");
const cryptBtn = document.querySelector("#cryptBtn");


async function consumeCrypto (input) {
    let pWordInt8 = new TextEncoder().encode(input);
    let hashBuffer = await crypto.subtle.digest("SHA-256", pWordInt8);
    let hashArray = Array.from(new Uint8Array(hashBuffer));
    let HashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return HashHex;

}

output.innerHTML = await consumeCrypto(example.value);

/* //SHA 256 FUNCTION! :O Am a real Kriptograffer naow
let password = "testar";
let pWordInt8 = new TextEncoder().encode(password);
let hashBuffer = await crypto.subtle.digest("SHA-256", pWordInt8);
let hashArray = Array.from(new Uint8Array(hashBuffer));
let HashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
console.log("HashHex:", HashHex);

cryptBtn.addEventListener('click', function() {
    hashFunc();
}); */

import UserList from "./userList.js";
import User from "./user.js";

let createName = document.querySelector("#createName");
let createPassword = document.querySelector("#createPassword");
let createBtn = document.querySelector("#createBtn");

let loginName = document.querySelector("#loginName");
let loginPassword = document.querySelector("#loginPassword");
let loginBtn = document.querySelector("#loginBtn");

createBtn.addEventListener('click', () => {
    users.addUser(new User(createName.value, createPassword.value));
    console.log("users", users);
});

loginBtn.addEventListener('click', async () => {
    let foundUser = users._users.find(user => user._name === loginName.value);
    let userId = await foundUser.checkPassword(loginPassword.value);
    localStorage.setItem("userId", userId);
    console.log("userId in LS: ",localStorage.getItem('userId'));
});

let users = new UserList();
console.log("userList", users)



