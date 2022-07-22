//DOM Elements
import {startButton,
        submitButton,
        inputSubmitNumber,
        modalWindow,
        bacgroundModalWindow,
        stringRandomNumbers
} from './domElements'

//Functions
import {showPlayWindow, hiddenPlayWindow} from './showModalWindow';
import {addHtmlText,initStart} from './createNumbers';



startButton.addEventListener('click', (e) => {
    showPlayWindow(modalWindow, bacgroundModalWindow);
    addHtmlText(stringRandomNumbers);
})

submitButton.addEventListener('click', (e) => {
    let status = initStart(stringRandomNumbers, inputSubmitNumber);
    console.log(status);
    if(status) {
        inputSubmitNumber.value = ''; 
    } else {
        hiddenPlayWindow(modalWindow, bacgroundModalWindow)
    }
})