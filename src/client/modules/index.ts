const startButton: HTMLButtonElement = document.querySelector('.start-booton');
const submitButton: HTMLButtonElement = document.querySelector('.submit-booton');
const modalWindow: HTMLDivElement = document.querySelector('.modal_window');
const bacgroundModalWindow: HTMLDivElement = document.querySelector('.modal_window-background');
const stringRandomNumbers: HTMLElement = document.querySelector('.modal_window-quest');
const inputSubmitnumber: HTMLInputElement = document.querySelector('.input-submit');

import {showPlayWindow, hiddenPlayWindow} from './showModalWindow';
import {checkTrueValue} from './createNumbers';



startButton.addEventListener('click', (e) => {
    showPlayWindow(modalWindow, bacgroundModalWindow);
})

submitButton.addEventListener('click', (e) => {
    // hiddenPlayWindow(modalWindow, bacgroundModalWindow);
    checkTrueValue(inputSubmitnumber)
    inputSubmitnumber.value = '';
   
    
})