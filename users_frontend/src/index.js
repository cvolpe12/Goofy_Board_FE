document.addEventListener("DOMContentLoaded", () => {
  const snowboarder = document.querySelector('#character')
  const log = document.querySelector('#log')
  const tree = document.querySelector('#tree')
  const canvas = document.querySelector('#canvas')

  document.addEventListener("keydown", moveCharacter)
  document.addEventListener("click", (e)=> {console.log(e);})

  function changeCanvasSize(){
    canvas.width = 600;
    canvas.height = 800;

    avatarImage.src = "images/snowboarder.png";
    canvas.getContext("2d").drawImage(avatarImage, 400, 400);
  }

// game over
  // if bottom px of log = start px of snowboard game over
  // unless
  // space bar is hit (jump)
  // if side px of image = side px of snowboard game over

// game start
// scoring
  // counting time elapsed
  // create form for initials

// change images to programmer stuff










  function moveCharacter(e) {
    // console.log(e);
    switch (e.code) {
      case "ArrowRight":
        e.preventDefault()
        moveRight()
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
        snowboarder.style.top = 200 - (-0.1 * x * (x - 50)) + 'px';
                          //this number needs to be the starting position
        if(x >= 50) clearInterval(interval);
    }, 20);
  }
})
