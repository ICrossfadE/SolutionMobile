//DOM Elements
import {
  startButton,
  submitButton,
  inputSubmitNumber,
  modalWindow,
  bacgroundModalWindow,
  stringRandomNumbers,
  userScore,
  lifeCounter,
  lifes,
} from "./domElements";

//Functions
import { showPlayWindow, hidePlayWindow, decrementGameLife, createGamelife, showUserScor } from "./modalWindow";
import { addHtmlText, initStart } from "./createNumbers";

startButton.addEventListener("click", (event: MouseEvent) => {
  createGamelife(lifeCounter, lifes);

  showPlayWindow(modalWindow);
  showPlayWindow(bacgroundModalWindow);
  hidePlayWindow(startButton);

  addHtmlText(stringRandomNumbers);
});

submitButton.addEventListener("click", (event: MouseEvent) => {
  const status = initStart(stringRandomNumbers, inputSubmitNumber);
  console.log(status);
  if (status) {
    showUserScor(userScore);
    inputSubmitNumber.value = "";
  } else {
    decrementGameLife(lifes, lifeCounter, modalWindow, bacgroundModalWindow, startButton);
  }
});
