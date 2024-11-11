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


 console.log('Computer choice: ', computer);

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

alert('The computer chose ' + computer + '\n' + result);
}