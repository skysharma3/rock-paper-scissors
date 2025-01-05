let playerScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const winSound = new Audio('win.mp3');
    const loseSound = new Audio('lose.mp3');

    let result = '';

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${userChoice} beats ${computerChoice}.`;
        playerScore++;
        winSound.play();
    } else {
        result = `You lose! ${computerChoice} beats ${userChoice}.`;
        computerScore++;
        loseSound.play();
    }

    document.getElementById('result').textContent = result;
    document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    // Check for a winner
    if (playerScore === 5 || computerScore === 5) {
        const finalResult = playerScore === 5 ? '🎉 You are the overall winner!' : '💻 Computer wins this time!';
        alert(finalResult);
        resetGame(); // Reset game after declaring a winner
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('score').textContent = `Player: 0 | Computer: 0`;
}
