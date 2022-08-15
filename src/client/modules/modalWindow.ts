export function showPlayWindow(elem: HTMLElement): void {
  elem.classList.add("active");
  elem.classList.remove("hidden");
}

export function hidePlayWindow(elem: HTMLElement): void {
  elem.classList.add("hidden");
  elem.classList.remove("active");
}

export function showUserScor(elem: HTMLElement): void {
  elem.classList.add("active-score");
  elem.classList.remove("hidden");
  setTimeout(() => {
    elem.classList.add("hidden");
    elem.classList.remove("active-score");
  }, 2000);
}
export function showBacgroundColor(elem: HTMLElement): void {
  elem.classList.add("active-baground");
  setTimeout(() => {
    elem.classList.remove("active-baground");
  }, 500);
}

export function createGamelife(elem: HTMLElement, gameLifes: Node[]): void {
  for (let i = 0; i >= gameLifes.length; i++) {
    const div = document.createElement("div");
    div.classList.add("life");

    // console.log("create", div);
    gameLifes.push(div);

    elem.appendChild(div);

    if (i === 2) break;
  }
}

export function decrementGameLife(
  gameLifes: Node[],
  elem: HTMLElement,
  elem1: HTMLElement,
  elem2: HTMLDivElement,
  botton: HTMLButtonElement
) {
  //delete

  gameLifes.pop();
  elem.firstChild.remove();

  //hidden Modal window
  if (!Boolean(gameLifes.length)) {
    hidePlayWindow(elem1);
    hidePlayWindow(elem2);
    showPlayWindow(botton);
  }
}
