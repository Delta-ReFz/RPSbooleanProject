const score = {

    wins: 0,
    losses: 0,
    ties: 0
};

console.log(score);

function play(userChoice) {

    let computer = '';
    let result = '';


const num = Math.random();

if(num >= 0 && num < 1/3) {
    computer = 'rock';
 }

 else if (num >= 1/3 && num < 2/3) {
    computer = 'paper';
 }

 else {
    computer = 'scissors';
 }

 if(computer === userChoice) {
 
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

if(result === 'You Win') {

    score.wins += 1;
} else if(result === 'You Lose') {

    score.losses += 1;
} else if(result === 'Thats a Tie') {

    score.ties += 1;
}

alert('You picked ' + userChoice +' The computer picked ' + computer + '\n' + result + '\nWins:  ' + 
    score.wins + ' Losses: ' + score.losses + ' Ties: ' + score.ties);
}

function reset(userChoice) {

    if(userChoice === 'reset') {

        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
    }
}
