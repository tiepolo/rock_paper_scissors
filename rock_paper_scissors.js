// Prompt to get user choice
const getUserChoice = userInput => {
  userInput = prompt('Please enter either rock, paper, or sciccors.').toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    alert('You need to enter either rock, paper, or scissors.');
  }
};

// Randomly generates the computer choice
const getComputerChoice = () => {
  let randNumber = Math.floor(Math.random() * 3);
  if (randNumber === 0) {
    return 'rock';
  } else if (randNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

// Determines who won
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'The user won!';
    } else {
      return 'The computer won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'The user won!';
    } else {
      return 'The computer won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'The user won!';
    } else {
      return 'The computer won!';
    }
  }
};

// Displays the winner
const playGame = () => {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  document.write('You threw: ' + userChoice + '<br />');
  document.write('The computer threw: ' + computerChoice + '<br />');
  document.write(determineWinner(userChoice, computerChoice) + '<br />');
}
playGame();
