const choice = ["rock", "paper", "scissors"]

function getComputerChoice() {
    for (let i = 0; i < 3; i++) {
        const random = choice[Math.floor(Math.random() * choice.length)];
        return random
    }
}

function getPlayerChoice() {
    let player = prompt("Type Rock, Paper or Scissors");

    if (player == null) {
        return null
    } else if (player.match(/^rock$/i)) {
        let rock = "rock";
        return rock;
    } else if (player.match(/^paper$/i)) {
        let paper = "paper";
        return paper;
    } else if (player.match(/^scissors$/i)) {
        let scissors = "scissors";
        return scissors;
    } else {
        getPlayerChoice()
    }
}

function playRound() {
    let win = "win"
    let lose = "lose"
    let draw = "draw"
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    if (playerChoice == null) {
        return null
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
        return lose
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log(`You won! ${playerChoice} beats ${computerChoice}`)
        return win
    } else if (playerChoice == "rock" && computerChoice == "rock") {
        console.log(`It's a draw ${playerChoice} is the same as ${computerChoice}`)
        return draw
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log(`You won! ${playerChoice} beats ${computerChoice}`)
        return win
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
        return lose
    } else if (playerChoice == "paper" && computerChoice == "paper") {
        console.log(`It's a draw ${playerChoice} is the same as ${computerChoice}`)
        return draw
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log(`You won! ${playerChoice} beats ${computerChoice}`)
        return win
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
        return lose
    } else if (playerChoice == "scissors" && computerChoice == "scissors") {
        console.log(`It's a draw ${playerChoice} is the same as ${computerChoice}`)
        return draw
    }
}

function game() {
    p1 = 0
    cpu = 0

    for (let i = 0; i < 5; i++) {
        let result = playRound();

        if (result == null) {
            console.log("Canceled: The Game is over.")
            break
        }
        else if (result == "win") {
            p1++
            console.log(`Congratulations you won! \n Your score is ${p1} and CPU ${cpu}`)
        } else if (result == "lose") {
            cpu++
            console.log(`Too bad you loose! \n Your score is ${p1} and CPU ${cpu}`)
        } else if (result == "draw") {
            console.log(`It\'s a draw! \n Your score is ${p1} and CPU ${cpu}`)
        }
    }

    if (p1 > cpu) {
        console.log("Congratulations you won the championship!")
        return
    } else if (p1 < cpu) {
        console.log("Too bad! You lost the championship")
        return
    } else if (p1 = cpu) {
        console.log("It's a draw! What a coincidence")
        return
    }
}

game()