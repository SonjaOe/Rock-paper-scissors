//User choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else { 
    console.log('Invalid choice!')
  }
  }
  
  //Computer choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
  case 0:
  return 'rock'
  break;
  case 1:
  return 'paper'
  break;
  case 2:
  return 'scissors'
  break;}}
  
  //Determining winner
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice)
    return 'This game ended in a tie. Play again!';
    
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'Sorry, you lost. Try again!';
      } else {
        return 'You won! Congratulations!'
      }
    }
  
    if(userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'Sorry, you lost. Try again!';
      } else {
        return 'You won! Congratulations!'
      }
    }
  
    if(userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'Sorry, you lost. Try again!'
      } else {
        return 'You won! Congratulations!'
      }
    } 
    
    if(userChoice === 'bomb') {
    return 'Smart move, you win!'
    }}
    
    
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw ' + userChoice + '.')
    console.log('The computer threw ' + computerChoice + '.')
  
  console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame()