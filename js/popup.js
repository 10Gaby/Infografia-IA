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


//Touch

var xDown = null;                                                        
var yDown = null;                                                         
 
function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                 
 
function handleTouchMove(evt) {                                          
    if ( ! xDown || ! yDown ) {
        return;
    }
 
    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;                                    
 
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
 
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        evt.preventDefault(); /* prevent scrolling while swiping */
        if ( xDiff > 0 ) {
            /* left swipe */
        } else {
            /* right swipe */
        }                       
    } 
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
 
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
