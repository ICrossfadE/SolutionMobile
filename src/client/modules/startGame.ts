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
import { showPlayWindow, decrementGameLife, createGamelife } from "./modalWindow";
import { addHtmlText, initStart } from "./createNumbers";

startButton.addEventListener("click", (e) => {
  createGamelife(lifeCounter, lifes);

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
    decrementGameLife(lifes, lifeCounter, modalWindow, bacgroundModalWindow);
  }
});
