console.log("Witam wszystkich na mojej stronie :)")

let themeButton = document.querySelector(".themeButton");
let bodyHead = document.querySelector(".bodyHead");
let themeName = document.querySelector(".themeName");


themeButton.addEventListener("click", () => {
    bodyHead.classList.toggle("lightRed");

    if (bodyHead.classList.contains("lightRed")) {
        themeName.innerText = "jasny"; 
    } else {
        themeName.innerText = "czerwony";
    }
})




