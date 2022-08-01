//DOM Elements
import {
  startButton,
  submitButton,
  inputSubmitNumber,
  modalWindow,
  bacgroundModalWindow,
  stringRandomNumbers,
  lifeCounter,
  lifes,
} from "./domElements";

//Functions
import { showPlayWindow, decrementGameLife, restartGame } from "./modalWindow";
import { addHtmlText, initStart } from "./createNumbers";

startButton.addEventListener("click", (e) => {
  restartGame(lifeCounter, lifes);

  showPlayWindow(modalWindow);
  showPlayWindow(bacgroundModalWindow);

  addHtmlText(stringRandomNumbers);
});

submitButton.addEventListener("click", (e) => {
  let status = initStart(stringRandomNumbers, inputSubmitNumber);
  console.log(status);
  if (status) {
    inputSubmitNumber.value = "";
  } else {
    console.log(lifes);

    decrementGameLife(lifes, modalWindow, bacgroundModalWindow);
    // hiddenPlayWindow(modalWindow);
    // hiddenPlayWindow(bacgroundModalWindow);
  }
});
