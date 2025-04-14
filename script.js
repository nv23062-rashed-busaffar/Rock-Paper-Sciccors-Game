let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage = '';

    if (humanChoice === computerChoice) {
        resultMessage = "It's a draw!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        humanScore++;
    } else {
        resultMessage = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        computerScore++;
    }

    document.getElementById('result').innerText = resultMessage;
    document.getElementById('score').innerText = `Score - You: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore === 5) {
        alert("Congratulations! You are the game winner!");
        resetGame();
    } else if (computerScore === 5) {
        alert("The computer is the game winner!");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById('result').innerText = '';
    document.getElementById('score').innerText = '';
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
