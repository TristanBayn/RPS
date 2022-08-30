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