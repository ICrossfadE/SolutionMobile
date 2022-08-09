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

startButton.addEventListener("click", (event: MouseEvent) => {
  createGamelife(lifeCounter, lifes);

  showPlayWindow(modalWindow);
  showPlayWindow(bacgroundModalWindow);

  addHtmlText(stringRandomNumbers);
});

submitButton.addEventListener("click", (event: MouseEvent) => {
  const status = initStart(stringRandomNumbers, inputSubmitNumber);
  console.log(status);
  if (status) {
    inputSubmitNumber.value = "";
  } else {
    decrementGameLife(lifes, lifeCounter, modalWindow, bacgroundModalWindow);
  }
});
