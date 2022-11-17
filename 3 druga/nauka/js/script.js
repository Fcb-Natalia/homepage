console.log("Cześć!")

let przycisk = document.querySelector(".przycisk");
let naglowek = document.querySelector(".naglowek");
let changeColorButton = document.querySelector(".changeBackground")
let cointainer = document.querySelector(".container")


przycisk.addEventListener("click", () => {

    naglowek.remove();
});

changeColorButton.addEventListener("click", () => {

    cointainer.classList.toggle("whiteBackground");
});
