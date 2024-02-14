// function play() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
//   console.log(homeSection);
// }

// function handleKeyboardButtonPress() {
//   console.log("object");
// }

// // capture keyboard key press

// document.addEventListener("keyup", handleKeyboardButtonPress);

function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;
  console.log("Player Pressed", playerPressed);
  //stop game to press Esc button
  if (playerPressed === "Escape") {
    gameOver();
  }

  //get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  //kconsole.log(playerPressed, expectedAlphabet);
  //check matched or not
  if (playerPressed === expectedAlphabet) {
    console.log("You have got a point");

    const currentScore = getTextElementValueById("current-score");
    console.log(currentScore);
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);

    // //update score------
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // // increase score by 1

    const newScore = currentScore + 1;
    // console.log(currentScore);

    // // show update score
    // currentScoreElement.innerText = newScore;
    // console.log("You have pressed correctly", expectedAlphabet);
    removeBackgroundById(expectedAlphabet);
    continueGame();
  } else {
    console.log("You missed. You lost a life.");
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }
    // //get current life number
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // //reduce life
    // const newLife = currentLife - 1;
    // currentLifeElement.innerText = newLife;
  }
}
document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  const alphabet = getRandomAlphabet();
  console.log("Your random alphabet", alphabet);
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

function play() {
  //hide everything show only playground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");
  //reset score and life
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  //update final score
  const lastScore = getTextElementValueById("current-score");
  console.log(lastScore);
  setTextElementValueById("last-score", lastScore);

  const currentAlphabet = getElementTextById("current-alphabet");
  //console.log(currentAlphabet);
  removeBackgroundById(currentAlphabet);
}
