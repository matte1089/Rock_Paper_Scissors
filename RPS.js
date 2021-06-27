const myArray = ['Rock', 'Paper', 'Scissors'];
const computerSelection = computerPlay();
const playerSelection = 'Rock';
console.log(playRound(playerSelection, computerSelection));


//when computerPlay is tested it returns one of the three

function computerPlay(){
    return myArray[Math.floor(Math.random()* myArray.length)];
}

// setting RPS with an array. will return a random in a variable.

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
    return 'Draw';
    }

      if ( 
        (playerSelection === 'Rock' && computerSelection === 'Scissors')|| 
        (playerSelection === 'Scissors' && computerSelection === 'Paper')||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
     )
     {
       return 'Humanity Wins!';  
     }

     else 
     (
        (computerSelection === 'Rock' && playerSelection === 'Scissors')||
        (computerSelection === 'Scissors' && playerSelection === 'Paper')||
        (computerSelection === 'Paper' && playerSelection === 'Rock')
    )


    {
        return 'The Machines have won!';
    }
}
     
