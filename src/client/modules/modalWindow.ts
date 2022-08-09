export function showPlayWindow(elem: HTMLElement): void {
  elem.classList.add("active");
  elem.classList.remove("hidden");
}

export function hidePlayWindow(elem: HTMLElement): void {
  elem.classList.add("hidden");
  elem.classList.remove("active");
}

export function createGamelife(elem: HTMLElement, gameLifes: Node[]): void {
  for (let i = 0; i >= gameLifes.length; i++) {
    const div = document.createElement("div");
    div.classList.add("life");

    console.log("create", div);
    gameLifes.push(div);

    elem.appendChild(div);

    if (i === 2) break;
  }

  console.log("start", gameLifes);
}

export function decrementGameLife(gameLifes: Node[], elem: HTMLElement, elem1: HTMLElement, elem2: HTMLElement): void {
  //delete
  gameLifes.pop();
  elem.firstChild.remove();

  console.log(gameLifes);
  console.log(Boolean(gameLifes.length));

  //hidden Modal window
  if (!Boolean(gameLifes.length)) {
    hidePlayWindow(elem1);
    hidePlayWindow(elem2);
  }
}
