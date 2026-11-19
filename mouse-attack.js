// Left-clicking or tapping the game field fires the same cleaner shot as Space.
document.getElementById('germCanvas').addEventListener('pointerdown', event => {
  if (event.button !== undefined && event.button !== 0) return;
  event.preventDefault();
  window.dispatchEvent(new KeyboardEvent('keydown', {code:'Space', key:' ', bubbles:true}));
});
