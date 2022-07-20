export function showPlayWindow(elem1: HTMLElement, elem2: HTMLElement) {
    elem1.classList.add('active');
    elem1.classList.remove('hidden');
    elem2.classList.add('active');
    elem2.classList.remove('hidden');
};

export function hiddenPlayWindow(elem1: HTMLElement, elem2: HTMLElement) {
    elem1.classList.add('hidden');
    elem1.classList.remove('active');
    elem2.classList.add('hidden');
    elem2.classList.remove('active');
};