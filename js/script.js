
let computerScore = 0;
let playerScore = 0;

game();



function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    if (number === 0) {
        return 'Scissors';
    }
    else if (number === 1) {
        return 'Paper';
    }
    else if (number === 2) {
        return 'Rock';
    }
    else {
        return 'Sorry, an error occured';
    }
}

function getPlayerChoice() {
    let choice = true;

    while (true) {
    let playerSelection = prompt('Scissors, Paper, or Rock?');
    playerSelection = playerSelection.charAt(0).toUpperCase() + 
                    playerSelection.slice(1).toLowerCase();

    if (playerSelection === '') {
        console.log('Please enter a value');
    }
    else if (playerSelection !== 'Scissors' && playerSelection !== 'Rock' && playerSelection !== 'Paper') {
        console.log('Invalid Choice, please select between Rock, Paper or Scissors');
    }

    else {
        choice = false;
        return playerSelection;
    }

    }
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a draw!`;
    }

   else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }

    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    
    }
    else {
        return 'Something went wrong';
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
        console.log(`Player Score : ${playerScore} - Computer Score : ${computerScore}`);
    }

    console.log(checkWin(playerScore, computerScore));
    resetScores();


}


function checkWin(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return `Congratulations! You won the game!`;
    }
    else if (computerScore > playerScore) {
        return `Unlucky! You lost to the computer`;
    }
    else {
        return `You tied with the Computer!`;
    }
}


function resetScores() {
    computerScore = 0;
    playerScore = 0;
}
