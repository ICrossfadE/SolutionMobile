export function showPlayWindow(elem: HTMLElement) {
  elem.classList.add("active");
  elem.classList.remove("hidden");
}

export function hiddenPlayWindow(elem: HTMLElement) {
  elem.classList.add("hidden");
  elem.classList.remove("active");
}
