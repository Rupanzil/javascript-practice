const form = document.querySelector("form");
let randomNumber = Math.floor(Math.random()*100) + 1;
let userGuesses = []
let chancesLeft = 10;
let gameOver = false;

form.addEventListener("submit", (event) => {
    // event.preventDefault() is needed as it will prevent the default submit action of the button
    event.preventDefault();
    const userInput = parseInt(document.querySelector("#guessField").value);
    if (!gameOver) {
        if (userInput < randomNumber) {
            document.querySelector(".lowOrHi").innerHTML = "Higher"
        } else if ( userInput > randomNumber ) {
            document.querySelector(".lowOrHi").innerHTML = "Lower"
        } else document.querySelector(".lowOrHi").innerHTML = "Correct !! <br> Press any key to restart"
        console.log(randomNumber);
        userGuesses.push(` ${userInput}`)
        document.querySelector(".guesses").innerHTML = userGuesses;
        chancesLeft = chancesLeft - 1;
        document.querySelector(".lastResult").innerHTML = chancesLeft;
        console.log(`This is running. Chances Left: ${chancesLeft}`);
        if (chancesLeft == 0) {
            document.querySelector(".lowOrHi").innerHTML = "GAME OVER !!! <br> Press any key to restart"
            gameOver = true;
        }
    }
    document.querySelector("#guessField").value = "";
});

document.addEventListener("keydown", () => {
    console.log("keyboard event listener");
    if(gameOver) {
        restart ();
    }
})

function restart () {
    gameOver = false;
    randomNumber = Math.floor(Math.random()*100) + 1;
    userGuesses = [];
    chancesLeft = 10;
}