const numberInput = document.querySelector("input");
const numberContainer = document.querySelector(".dynamic-divs");

const resetButton = document.querySelector(".reset");


/* numberInput.onclick = function () {
    console.log(event.target.value);
} */

function counter() {
    let numberValue = event.target.value;
    numberContainer.innerHTML += `<div>Number ${numberValue} </div>`
}

function resetDivs () {
    numberContainer.innerHTML = "";
    numberInput.value = 0;
}

numberInput.addEventListener("click", counter);
resetButton.addEventListener("click", resetDivs);