const startButton: HTMLButtonElement = document.querySelector('.start-booton');
const submitButton: HTMLButtonElement = document.querySelector('.submit-booton');
const modalWindow: HTMLDivElement = document.querySelector('.modal_window');

function showPlayWindow(elem: HTMLElement) {
    elem.classList.add('active');
    elem.classList.remove('hidden');
}

function hiddenPlayWindow(elem: HTMLElement) {
    elem.classList.add('hidden');
    elem.classList.remove('active');
}

startButton.addEventListener('click', (e) => {
    console.log('start');
    showPlayWindow(modalWindow);
})

submitButton.addEventListener('click', (e) => {
    console.log('start');
    hiddenPlayWindow(modalWindow);
})