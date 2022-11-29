{
    const welcome = () => {
        console.log("Witam wszystkich na mojej stronie :)")
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const nextColorButton = document.querySelector(".js-nextColorButton");

        body.classList.toggle("body--lightRed");
        nextColorButton.innerText = body.classList.contains("body--lightRed") ? "jasny" : "czerwony";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}






