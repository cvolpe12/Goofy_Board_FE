document.addEventListener("DOMContentLoaded", () => {
  const snowboarder = document.querySelector('#character')

  document.addEventListener("keydown", moveCharacter)

  function moveCharacter(e) {
    console.log(e);
    switch (e.code) {
      case "ArrowRight":
        moveRight()
        break;
      case "ArrowLeft":
        moveLeft()
        break;
      case "Space":
        jumpUp()
        break;
      default:
    }
  }

  function moveRight(){
    snowboarder.style.left = parseInt(snowboarder.style.left) + 5 + 'px';
  }

  function moveLeft(){
    snowboarder.style.left = parseInt(snowboarder.style.left) - 5 + 'px';
  }

  function jumpUp(){
    var x = 0;
    var interval = setInterval(function() {
      x++;
      snowboarder.style.top = 250 - (-0.1 * x * (x - 50)) + 'px';
      if(x >= 50) clearInterval(interval);
    }, 20);
  }

  function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
   }
  }

})
