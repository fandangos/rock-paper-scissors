const choice = ["rock", "paper", "scissors"]

let playerChoice = null;
let p1Selection = null;
let p1 = 0;
let cpu = 0;
let round = 0;
let win = "win";
let lose = "lose";
let draw = "draw";

const buttons = document.querySelectorAll('.button');
const reset = document.querySelector('#playAgain');
const p1ScoreNumber = document.querySelector('#p1ScoreNumber');
const cpuScoreNumber = document.querySelector('#cpuScoreNumber');
const roundNumber = document.querySelector('#roundNumber');
const roundResult = document.querySelector('#roundResult');
const finalResult = document.querySelector('#finalResult');
const finalResultText = document.querySelector('#finalResultText');
const roundChoices = document.querySelector('#roundChoices');

reset.addEventListener('click', resetGame);

buttons.forEach(btn => {
    btn.addEventListener('mouseover', event => {
        btn.style.backgroundColor = '#fff';
    })
});

buttons.forEach(btn => {
    btn.addEventListener('touchstart', event => {
        btn.style.backgroundColor = '#fff';
    })
});

buttons.forEach(btn => {
    btn.addEventListener('mouseleave', event => {
        btn.style.backgroundColor = '';
    })
})

buttons.forEach(btn => {
    btn.addEventListener('touchend', event => {
        btn.style.backgroundColor = '';
    })
})

buttons.forEach(btn => {
    btn.addEventListener('mousedown', event => {
        btn.style.transform = 'scale(1.15)';
    })
})

buttons.forEach(btn => {
    btn.addEventListener('mouseup', event => {
        btn.style.transform = 'none';
    })
})

function getComputerChoice() {
    for (let i = 0; i < 3; i++) {
        const random = choice[Math.floor(Math.random() * choice.length)];
        return random
    }
}

function resetGame() {
    playerChoice = null;
    p1Selection = null;
    p1 = 0;
    p1ScoreNumber.textContent = p1;
    cpu = 0;
    cpuScoreNumber.textContent = cpu;
    round = 0;
    roundNumber.textContent = 'Let\'s go!';
    finalResult.style.display = 'none';
    roundResult.textContent = '';
    roundChoices.innerHTML = '';
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', function () {
    if (round < 5) {
        round++;
        playerChoice = "rock";
        game();
    } else {
        console.log("Championship is over. Play again?")
    }
});

paperBtn.addEventListener('click', function () {
    if (round < 5) {
        round++;
        playerChoice = "paper";
        game();
    } else {
        console.log("Championship is over. Play again?")
    }
});

scissorsBtn.addEventListener('click', function () {
    if (round < 5) {
        round++;
        playerChoice = "scissors";
        game();
    }
    else {
        console.log("Championship is over. Play again?")
    }
});

function playRound() {

    let computerChoice = getComputerChoice();

    if (playerChoice == null) {
        return null
    }
    else if (playerChoice == "rock" && computerChoice == "paper") {
        roundChoices.innerHTML = '<img src=img/rock.png> vs <img src=img/paper.png>'
        return lose
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        roundChoices.innerHTML = '<img src=img/rock.png> vs <img src=img/scissors.png>'
        return win
    } else if (playerChoice == "rock" && computerChoice == "rock") {
        roundChoices.innerHTML = '<img src=img/rock.png> vs <img src=img/rock.png>'
        return draw
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        roundChoices.innerHTML = '<img src=img/paper.png> vs <img src=img/rock.png>'
        return win
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        roundChoices.innerHTML = '<img src=img/paper.png> vs <img src=img/scissors.png>'
        return lose
    } else if (playerChoice == "paper" && computerChoice == "paper") {
        roundChoices.innerHTML = '<img src=img/paper.png> vs <img src=img/paper.png>'
        return draw
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        roundChoices.innerHTML = '<img src=img/scissors.png> vs <img src=img/paper.png>'
        return win
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        roundChoices.innerHTML = '<img src=img/scissors.png> vs <img src=img/rock.png>'
        return lose
    } else if (playerChoice == "scissors" && computerChoice == "scissors") {
        roundChoices.innerHTML = '<img src=img/scissors.png> vs <img src=img/scissors.png>'
        return draw
    }
}

function game() {
    result = playRound();
    roundNumber.textContent = 'Round: ' + round;

    if (result == win && round < 5) {
        p1++;
        p1ScoreNumber.textContent = p1;
        roundResult.textContent = 'You won this round!';
    } else if (result == lose && round < 5) {
        cpu++;
        cpuScoreNumber.textContent = cpu;
        roundResult.textContent = 'You lost this round!';
    } else if (result == draw && round < 5) {
        p1++;
        cpu++;
        cpuScoreNumber.textContent = cpu;
        p1ScoreNumber.textContent = p1;
        roundResult.textContent = 'It\'s a draw!';
    }
    else if (p1 > cpu && round == 5) {
        finalResultText.textContent = 'Congratulations you won the championship!';
        finalResult.style.display = 'flex';
        return
    } else if (p1 < cpu && round == 5) {
        finalResultText.textContent = 'Too bad. You lost the championship!';
        finalResult.style.display = 'flex';
        return
    } else if (p1 = cpu && round == 5) {
        finalResultText.textContent = 'It\'s a draw! What a coincidence!';
        finalResult.style.display = 'flex';
        return
    } else {
        return
    }
}