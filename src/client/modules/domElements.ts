//Bottons
export const startButton: HTMLButtonElement = document.querySelector(".start-booton");
export const submitButton: HTMLButtonElement = document.querySelector(".submit-booton");

//input
export const inputSubmitNumber: HTMLInputElement = document.querySelector(".input-submit");

//Modal Window
export const modalWindow: HTMLDivElement = document.querySelector(".modal_window");
export const bacgroundModalWindow: HTMLDivElement = document.querySelector(".modal_window-background");

//Game Task
export const stringRandomNumbers: HTMLHeadingElement = document.querySelector(".modal_window-quest");

//Game Sore
export const userGameScore: HTMLDivElement = document.querySelector(".user_local-score");
export const gameScore: HTMLDivElement = document.querySelector(".game_score");

//Game Lifes
export const lifeCounter: HTMLDivElement = document.querySelector(".game-life");
const objectGameLife: NodeList = document.querySelectorAll(".life");
export const lifes: Node[] = Array.from(objectGameLife);
