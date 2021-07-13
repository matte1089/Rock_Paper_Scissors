let playerScore = 0;
let computerScore = 0;




const things = document.querySelectorAll('.things');
    
    things.forEach((thing) => {
      thing.addEventListener('click', function() {
            const playerSelection = this.textContent;

            const myArray = ['ROCK', 'PAPER', 'SCISSORS'];
            const computerSelection = myArray[Math.floor(Math.random() * myArray.length)];

            playRound(playerSelection, computerSelection);
        });
    });
    
    function playRound(playerSelection, computerSelection){
      const currentMatch = `${playerSelection} vs ${computerSelection}`;
  if (playerSelection === computerSelection){
    alert ('Draw - player chose: ' + playerSelection + ' &' + ' computer chose: ' + computerSelection);
    return ;
  }
  if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  ) 
  {
    alert ('Player Win - player chose: ' + playerSelection + ' & ' + ' computer chose ' + computerSelection);
    playerScore = ++playerScore;
    keepPlayerScore();
    declareWinner();
  return ;
  }

  else 
    (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    )
    {
    alert('Computer Wins - computer chose: ' + computerSelection + ' & ' + ' player chose ' + playerSelection);
    computerScore = ++computerScore;
    keepCpuScore();
    declareWinner();
  return ;
  }}


  function keepPlayerScore() {
    let playerScoreBox = document.querySelector("#playerScore"); 
    playerScoreBox.textContent = playerScore;
    
  }
  function keepCpuScore() {
    let computerScoreBox = document.querySelector("#computerScore");
    computerScoreBox.textContent = computerScore;
  }

function declareWinner(){
  if(playerScore === 5){
    alert('Humanity has won!')
  }
  else if(computerScore === 5){
    alert('The Machines have Won! Humanity is doomed!')
  }
}
// declare winner will work for playerSelection and computerSelections wins in the playRound function
