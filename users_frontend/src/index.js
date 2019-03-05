document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.querySelector("#game-canvas")
  const snowboarder = document.querySelector('#character')
  var ctx = gameCanvas.getContext("2d")
  ctx.drawImage(snowboarder, 10, 10);

  document.addEventListener("keydown", moveCharacter)
  document.addEventListener("click", (e)=> {console.log(e);})

  function moveCharacter(e) {
    // console.log(e);
    switch (e.code) {
      case "ArrowRight":
        e.preventDefault()
        moveRight()
        // console.log(snowboarder);
        break;
      case "ArrowLeft":
        e.preventDefault()
        moveLeft()
        console.log(snowboarder);
        break;
      case "Space":
        e.preventDefault()
        jumpUp()
        console.log(snowboarder);
        break;
      default:
    }
  }
  function moveRight(){
    console.log(snowboarder.style.left);
    if (parseInt(snowboarder.style.left) >= 700) {
      snowboarder.style.left = 700 + 'px'
    } else {
      snowboarder.style.left = parseInt(snowboarder.style.left) + 5 + 'px';
    }
  }
  function moveLeft(){
    if (parseInt(snowboarder.style.left) <= 0) {
      snowboarder.style.left = 0 + 'px'
    } else {
      snowboarder.style.left = parseInt(snowboarder.style.left) - 5 + 'px';
    }
  }
  function jumpUp(){
    var x = 0;

    var interval = setInterval(function() {
        x++;
        snowboarder.style.top = 250 - (-0.1 * x * (x - 50)) + 'px';

        if(x >= 50) clearInterval(interval);
    }, 20);
  }
})
