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
    debugger
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
    snowboarder.style.top = parseInt(snowboarder.style.top) - 10 + 'px';
    // wait(1000)
    snowboarder.style.top = parseInt(snowboarder.style.top) + 10 + 'px';
  }



  function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


})
