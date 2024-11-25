let score = JSON.parse(localStorage.getItem('score'));

// Same as if(score === null)
if (!score) {

    score = {

        wins: 0,
        ties: 0,
        losses: 0
    }
}

let computer = '';
let result = '';
let userChoice= '';

updateScoreElement();
updateResultElement();
updateMovesElement();

function play(Choice) {

    userChoice = Choice;
    const num = Math.random();

    if (num >= 0 && num < 1 / 3) {
        computer = 'rock';
    }

    else if (num >= 1 / 3 && num < 2 / 3) {
        computer = 'paper';
    }

    else {
        computer = 'scissors';
    }

    if (computer === userChoice) {

        result = 'Thats a Tie';
    }

    else if (

        (userChoice === 'rock' && computer === 'scissors') ||
        (userChoice === 'paper' && computer === 'rock') ||
        (userChoice === 'scissors' && computer === 'paper')
    ) {
        result = 'You Win';
    }

    else {
        result = 'You Lose';
    }

    if (result === 'You Win') {

        score.wins += 1;
    } else if (result === 'You Lose') {

        score.losses += 1;
    } else if (result === 'Thats a Tie') {

        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    //update the score en live sur la page pas besoin de refresh, il faut mettre la logique en dessous du local storage
    updateScoreElement();
    updateResultElement();
    updateMovesElement();
}

function reset(Choice) {

    userChoice = Choice;

    if (userChoice === 'reset') {

        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        userChoice = '';
        computer = '';
        result = '';
        updateScoreElement();
        updateResultElement();
        updateMovesElement();
    }
}

function updateScoreElement() {

    document.querySelector('.js-score').innerHTML = `Wins: 
    ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function updateResultElement() {

    document.querySelector('.js-result').innerHTML = `${result}`;

}

function updateMovesElement() {
    if (!userChoice && !computer) {
        document.querySelector('.js-moves').innerHTML = 'Make your move!';
    } else {
        document.querySelector('.js-moves').innerHTML = `
        <span class="user-move">${getIcon(userChoice)}</span> 
        <span class="vs"> vs </span> 
        <span class="computer-move">${getIcon(computer)}</span>
    `;
    }
}

function getIcon(choice) {
    if (choice === 'rock') return '🪨';
    if (choice === 'paper') return '📄';
    if (choice === 'scissors') return '✂️';
    return '';
}

