console.log("Witam wszystkich na mojej stronie :)")

let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let body = document.querySelector(".body");
let nextColorButton = document.querySelector(".js-nextColorButton");


changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("body--lightRed");

    nextColorButton.innerText = body.classList.contains("body--lightRed") ? "jasny" : "czerwony";
})




