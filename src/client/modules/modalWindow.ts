export function showPlayWindow(elem: HTMLElement) {
  elem.classList.add("active");
  elem.classList.remove("hidden");
}

export function hiddenPlayWindow(elem: HTMLElement) {
  elem.classList.add("hidden");
  elem.classList.remove("active");
}

export function createGamelife(elem: HTMLElement, gameLifes: Node[]) {
  const div = document.createElement("div");
  div.classList.add("life");

  for (let i = 0; i >= gameLifes.length; i++) {
    console.log("create", div);
    gameLifes.push(div);

    if (i === 2) break;
  }

  console.log("start", gameLifes);
}

export function decrementGameLife(gameLifes: Node[], elem1: HTMLElement, elem2: HTMLElement) {
  gameLifes.pop();

  console.log(gameLifes);
  console.log(Boolean(gameLifes.length));

  if (!Boolean(gameLifes.length)) {
    hiddenPlayWindow(elem1);
    hiddenPlayWindow(elem2);
  }
}
