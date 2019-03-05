document.addEventListener('DOMContentLoaded', () => {
  //VARIABLES===================================================================
  const gameCanvas = document.querySelector("#game-canvas")
  const gameScreen = document.querySelector('#game-screen')
  const dead = document.querySelector('#splat')
  const bug = document.querySelector('#bug')
  var ctx = gameCanvas.getContext("2d")

  let score = 0

  // gameCanvas.addEventListener("click", (e)=>{
  //   console.log(e.target);
  // })

  //EVENT LISTENERS=============================================================
  gameScreen.addEventListener("click", splat)


  //FUNCTIONS===================================================================
  function spawnEnemy(){
    let enemy = bug
    let x = Math.random() * 850
    let y = Math.random() * 450
    if ((y > 60 && y < 450) && (x > 10 && x < 850)) {
      enemy.style = `position:absolute; left:${x}px; top: ${y}px;`
    } else {
      spawnEnemy()
    }
  }

  function splat(e){
    console.log(e.target);
    if (e.target.id === "bug") {
      e.target.src = "images/red_splat.png"
      console.log("splat");
    }
    setTimeout(function(){
      debugger
      var splatImg = gameScreen.querySelector('#bug');
      gameScreen.removeChild(splatImg)
    }, 1000)
  }

  //CALLS=======================================================================
  spawnEnemy()
})
