const highestScoreEl = document.querySelector("#highestscore")
const numberEl = document.querySelector(".content-body__number")
const guesserNumberInput = document.querySelector(".content-body__guesser--input")
const messageEl = document.querySelector(".content-body__guesser--message")
const scoreEl = document.querySelector("#score")

const guessButton = document.querySelector(".btn--guess")
const playButton = document.querySelector(".btn--play")

let randomNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20
let highestScore = 0
let hasWinner

guesserNumberInput.value = ""

const displayMessage = function(message) {
    messageEl.textContent = message
}

guessButton.addEventListener("click", function() {
    const guesserNumberValue = Number(guesserNumberInput.value)

    if (guesserNumberValue === randomNumber ) {
        displayMessage("😍 You win!")
        numberEl.textContent = randomNumber
        if (score > highestScore) {
            highestScore = score
            highestScoreEl.textContent = highestScore
            hasWinner = true
        }
    } else if (!guesserNumberValue) {
        displayMessage("⛔ Not a number!")
    } else if (guesserNumberValue < randomNumber) {
        displayMessage("📉 Too low!")
        score--
        scoreEl.textContent = score
    } else if (guesserNumberValue > randomNumber) {
        displayMessage("📈 Too high!")
        score--
        scoreEl.textContent = score
    } 
})

playButton.addEventListener("click", function() {
    if (hasWinner) {
        score = 20
        scoreEl.textContent = score

        guesserNumberInput.value = ""
        numberEl.textContent = "?"
        messageEl.textContent = "Let's start the game!"

        randomNumber = Math.trunc(Math.random() * 20 + 1)
    }
})

