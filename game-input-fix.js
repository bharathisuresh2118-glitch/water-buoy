// This capture listener runs before the game listener so name typing stays normal.
window.addEventListener('keydown', event => {
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) event.stopImmediatePropagation();
}, true);
