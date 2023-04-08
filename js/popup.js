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


var container = document.querySelector('.touch-enabled');
var hammertime = new Hammer(container, {
  touchAction: 'auto',
  inputClass: Hammer.TouchInput,
  recognizers: [
    [Hammer.Pan, { direction: Hammer.DIRECTION_HORIZONTAL }]
  ]
});

hammertime.on('pan', function(ev) {
  container.scrollLeft -= ev.deltaX;
});
