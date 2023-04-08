function generateModalListeners() {
  for (let i = 1; i <= 30; i++) {
    const open = document.getElementById(`open${i}`);
    const modal_container = document.getElementById(`modal_container${i}`);
    const close = document.getElementById(`close${i}`);

    open.addEventListener('click', () => {
      modal_container.classList.add('show');
    });

    close.addEventListener('click', () => {
      modal_container.classList.remove('show');
    });
  }
}

generateModalListeners();

var container = document.querySelector('.outer-wrapper');

var startX, startY, currentX, currentY;

container.addEventListener("touchstart", function(event) {
  startX = event.touches[0].pageX;
  startY = event.touches[0].pageY;
  currentX = container.scrollLeft;
  currentY = container.scrollTop;
});

container.addEventListener("touchmove", function(event) {
  var deltaX = startX - event.touches[0].pageX;
  var deltaY = startY - event.touches[0].pageY;
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    event.preventDefault();
    container.scrollLeft = currentX + deltaX * 2; // ajustar la velocidad horizontal aquí
  }
});
