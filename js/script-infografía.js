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


function generateModalListeners2() {
  for (let i = 1; i <= 10; i++) {
    const open = document.getElementById(`open2-${i}`);
    const modal_container = document.getElementById(`modal_container2-${i}`);
    const close = document.getElementById(`close2-${i}`);

    open.addEventListener('click', () => {
      modal_container.classList.add('show');
    });

    close.addEventListener('click', () => {
      modal_container.classList.remove('show');
    });
  }
}

generateModalListeners2();



//Touch

var container = document.querySelector('.outer-wrapper');

container.addEventListener("touchstart", function(event) {
  startX = event.touches[0].pageX;
  startY = event.touches[0].pageY;
  x = container.scrollTop;
  y = container.scrollLeft;
});

container.addEventListener("touchmove", function(event) {
  event.preventDefault();
  var deltaX = startX - event.touches[0].pageX;
  var deltaY = startY - event.touches[0].pageY;
  container.scrollTop = x + deltaX;
  container.scrollLeft = y + deltaY;
});

/*
var container = document.querySelector('.outer-wrapper');

container.addEventListener("touchstart", function(event) {
  startX = event.touches[0].pageX;
  startY = event.touches[0].pageY;
  x = container.scrollLeft;
  y = container.scrollTop;
});

container.addEventListener("touchmove", function(event) {
  event.preventDefault();
  var deltaX = startX - event.touches[0].pageX;
  var deltaY = startY - event.touches[0].pageY;
  container.scrollLeft = x + deltaX;
  container.scrollTop = y + deltaY;
});
                           
*/


document.querySelector('.outer-wrapper').addEventListener('scroll', function(event){
  var letrero = document.querySelector(".letrero");
  letrero.classList.toggle("animate",event.target.scrollTop>3000)
})