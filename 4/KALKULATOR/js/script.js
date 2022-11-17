console.log("Witam, mój pierwszy kalkulator:)")

let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form")
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EURO = 4.69;
let USD = 4.52;
let GBP = 5.34;
let CHF = 4.80;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result;


    switch (currency) {

        case "EURO":
            result = amount / EURO;
            break;

        case "USD":
            result = amount / USD;
            break;

        case "GBP":
            result = amount / GBP;
            break;

        case "CHF":
            result = amount / CHF;
            break;

    }

    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});

