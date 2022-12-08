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

const example = document.querySelector("#example_input")
const output = document.querySelector("#output");
const cryptBtn = document.querySelector("#cryptBtn");

//SHA 256 FUNCTION! :O Am a real Kriptograffer naow
let password = "testar";
let pWordInt8 = new TextEncoder().encode(password);
let hashBuffer = await crypto.subtle.digest("SHA-256", pWordInt8);
let hashArray = Array.from(new Uint8Array(hashBuffer));
let HashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
console.log("HashHex:", HashHex);

cryptBtn.addEventListener('click', function() {
    hashFunc();
});

async function hashFunc () {
    let input = example.value;
    let pWordInt8 = new TextEncoder().encode(input);
    let hashBuffer = await crypto.subtle.digest("SHA-256", pWordInt8);
    let hashArray = Array.from(new Uint8Array(hashBuffer));
    let HashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    output.innerHTML = `Your hash: ${HashHex}`;
    location.reload;
    
}

