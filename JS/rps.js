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
    computer = 'scisors';
 }


 console.log('Computer choice: ', computer);

 if(computer === userChoice) {
    result = 'Thats a Tie';
 }
 else if (userChoice === 'rock')
}