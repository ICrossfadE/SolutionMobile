export const startButton: HTMLButtonElement = document.querySelector(".start-booton");
export const submitButton: HTMLButtonElement = document.querySelector(".submit-booton");
export const inputSubmitNumber: HTMLInputElement = document.querySelector(".input-submit");
export const modalWindow: HTMLDivElement = document.querySelector(".modal_window");
export const bacgroundModalWindow: HTMLDivElement = document.querySelector(".modal_window-background");
export const stringRandomNumbers: HTMLHeadingElement = document.querySelector(".modal_window-quest");
export const lifeCounter: HTMLDivElement = document.querySelector(".game-life");
const objectGameLife: NodeList = document.querySelectorAll(".life");
export const lifes: Node[] = Array.from(objectGameLife);
