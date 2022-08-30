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
    let playerSelection = prompt('Scissors, Paper, or Rock?');
    playerSelection = playerSelection.charAt(0).toUpperCase() + 
                    playerSelection.slice(1).toLowerCase();

    
    return playerSelection;
}


function playRound(playerSelection, computerSelection) {

}