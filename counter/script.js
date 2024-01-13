let currentValue = 0;

function increaseValue(currentValue) {
    return ++currentValue;
}

function decreaseValue(currentValue) {
    return --currentValue;
}

function updateValue(currentValue) {
    const span = document.querySelector("span")
    span.innerText = currentValue;
}

function reset() {
    return 0;
}
document.querySelector("#increase").addEventListener("click", () => {
    currentValue = increaseValue(currentValue)
    updateValue(currentValue)
})

document.querySelector("#decrease").addEventListener("click", () => {
    currentValue = decreaseValue(currentValue)
    updateValue(currentValue)
})

document.querySelector("#reset").addEventListener("click", () => {
    currentValue = reset();
    updateValue(currentValue)
})
