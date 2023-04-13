let result;
let playerScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {result = playGame(Number(button.id))});
});



// -----------------------------------------------------------------------------------
function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)+1;
    return choice;
}

function playRound(x) {
    const content = document.createElement('div');
    let result;
    let y = getComputerChoice();
    if ( x > y || (x === 1 && y === 3)) {
        result = 1; // player wins
        content.textContent = 'You won!';
    }
    else if (x === y) {
        result = 2; // draw
        content.textContent = 'It\'s a draw';
    }
    else {
        result = 3; // player loses
        content.textContent = 'You lost';
    }
    container.appendChild(content);
    return result;
}

function playGame(playerChoice) {
    let result = playRound(playerChoice);

    if (result === 1) {playerScore++}
    else if (result === 3) {computerScore++}
    else;

    if (playerScore === 5) {
        const banner = document.createElement('h1');
        banner.textContent = 'You won the game!';
        container.appendChild(banner);
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        const banner = document.createElement('h1');
        banner.textContent = 'Computer won the game!';
        container.appendChild(banner);
        playerScore = 0;
        computerScore = 0;
    }

    return result
}

