console.log("Witam wszystkich na mojej stronie :)")

let body__changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let body = document.querySelector(".body");
let body__nextColorButton = document.querySelector(".js-nextColorButton");


body__changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("body--lightRed");

    body__nextColorButton.innerText = body.classList.contains("body--lightRed") ? "jasny" : "czerwony";
})




