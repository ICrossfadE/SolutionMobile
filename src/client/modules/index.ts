const startButton: HTMLButtonElement = document.querySelector('.start-booton');
const submitButton: HTMLButtonElement = document.querySelector('.submit-booton');
const modalWindow: HTMLDivElement = document.querySelector('.modal_window');
const bacgroundModalWindow: HTMLDivElement = document.querySelector('.modal_window-background');

function showPlayWindow(elem1: HTMLElement, elem2: HTMLElement) {
    elem1.classList.add('active');
    elem1.classList.remove('hidden');
    elem2.classList.add('active');
    elem2.classList.remove('hidden');
}

function hiddenPlayWindow(elem1: HTMLElement, elem2: HTMLElement) {
    elem1.classList.add('hidden');
    elem1.classList.remove('active');
    elem2.classList.add('hidden');
    elem2.classList.remove('active');
}

startButton.addEventListener('click', (e) => {
    console.log('start');
    showPlayWindow(modalWindow, bacgroundModalWindow);
})

submitButton.addEventListener('click', (e) => {
    console.log('start');
    hiddenPlayWindow(modalWindow, bacgroundModalWindow);
})