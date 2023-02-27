const highestScoreEl = document.querySelector("#highestscore")
const numberEl = document.querySelector(".content-body__number")
const randomNumber = Math.trunc(Math.random() * 20 + 1)
const guesserNumberInput = document.querySelector(".content-body__guesser--input")
const messageEl = document.querySelector(".content-body__guesser--message")
const scoreEl = document.querySelector("#score")

const guessButton = document.querySelector(".btn--guess")
const playButton = document.querySelector(".btn--play")

let score = 20
let highestScore = 0
let hasWinner

const displayMessage = function(message) {
    messageEl.textContent = message
}

guessButton.addEventListener('click', function() {
    const guesserNumberValue = Number(guesserNumberInput.value)

    if (guesserNumberValue === randomNumber ) {
        displayMessage("😍 You win!")
        numberEl.textContent = randomNumber
        if (score > highestScore) {
            highestScore = score
            highestScoreEl.textContent = highestScore
        }
    } else if (guesserNumberValue < randomNumber) {
        displayMessage("📉 Too low!")
        score--
        scoreEl.textContent = score
    } else if (guesserNumberValue > randomNumber) {
        displayMessage("📈 Too high!")
        score--
        scoreEl.textContent = score
    } else if (!guesserNumberValue) {
        displayMessage("⛔ Not a number!")
    }
})

