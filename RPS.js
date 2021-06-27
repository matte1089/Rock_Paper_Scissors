const myArray = ['ROCK', 'PAPER', 'SCISSORS'];
const computerSelection = computerPlay();


let computerScore = 0;
let playerScore = 0;
let drawScore = 0;




//when computerPlay is tested it returns one of the three

function computerPlay(){
  return myArray[Math.floor(Math.random() * myArray.length)];
}





// setting RPS with an array. will return a random in a variable.

function playRound(){
    let playerSelection = prompt().toUpperCase();
    let computerSelection = computerPlay();
  if (playerSelection === computerSelection){
    drawScore++; 
    return ('Draw - player chose: ' + playerSelection + ' &' + ' computer chose:' + computerSelection);
  }

  else if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  ) {
    playerScore++;
    return ('Player Wins - player chose: ' + playerSelection + ' &' + ' computer chose:' + computerSelection);
  }

  else
    (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    )
  {
    computerScore++;
   return ('Computer Wins - player chose: ' + playerSelection + ' &' + ' computer chose:' + computerSelection);
  }
}

function game(){
  console.log(playRound());
  showScore();
  console.log(playRound());
  showScore();
  console.log(playRound());
  showScore();
  console.log(playRound());
  showScore();
  console.log(playRound());
  showScore();

}

const showScore = () =>  {
  console.log('player score' + playerScore);
  console.log('computer score' + computerScore);
  console.log('draw score' + drawScore);
  

};

game();

function trackWinner(){
  if (playerScore == 3 || computerScore == 3){
    return 'Someone won!'
  }
}
  


