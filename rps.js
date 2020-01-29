const choises = ["Rock", "Papper", "Scissors"];
const computerChoise = document.querySelector(".computer-choise-js");
const userChoise = document.querySelector(".user-choise-js");
const displayWinner = document.querySelector(".display-winner-js");

function play() {
  //Computer

  //Math floor rounds the numbers, we need this because Math.random() returns a valeu between 0 and 1.
  //Multiplied by 3 because the array has length of 3.

  let computerRandom = Math.floor(Math.random() * 3);
  let computerChose = choises[computerRandom];

  computerChoise.innerHTML = computerChose;

  //User

  let userRandom = Math.floor(Math.random() * 3);
  let playerChose = choises[userRandom];

  userChoise.innerHTML = playerChose;

  //Draw

  if (computerChose === playerChose) {
    displayWinner.innerHTML = "No winner!";
    return;
    //We return because we don't need to check anymore, since it's a tie.
  }

  //Decides winner, only one conditional statement

  if (
    (computerChose === "Scissors" && playerChose === "Papper") ||
    (computerChose === "Papper" && playerChose === "Rock") ||
    (computerChose === "Rock" && playerChose === "Scissors")
  ) {
    displayWinner.innerHTML = "Computer wins!";
  } else {
    displayWinner.innerHTML = "User wins!";
  }

  //Old version (no working propperly) improved with the solution above.

  // if(computerChose === "Scissors" && playerChose === "Papper") {
  //   displayWinner.innerHTML = "Computer wins!";
  // } else {
  //   displayWinner.innerHTML = "User wins!";
  // }
  // if (computerChose === "Papper" && playerChose === "Rock") {
  //   displayWinner.innerHTML = "Computer wins!";
  // } else {
  //   displayWinner.innerHTML = "User wins!";
  //   return;
  // }

  // if (computerChose === "Rock" && playerChose === "Scissors") {
  //   displayWinner.innerHTML = "Computer wins!";
  // } else {
  //   displayWinner.innerHTML = "User wins!";
  //   return;
  // }
}

const playButton = document.querySelector(".play-js");
playButton.addEventListener("click", play);
