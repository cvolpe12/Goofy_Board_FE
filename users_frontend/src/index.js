document.addEventListener('DOMContentLoaded', () => {
  //VARIABLES===================================================================
  const gameCanvas = document.querySelector("#game-canvas")
  const gameScreen = document.querySelector('#game-screen')
  const dead = document.querySelector('#splat')
  const bug = document.querySelector('#bug')
  var ctx = gameCanvas.getContext("2d")
  let bugId = 1
  let score = 0

  // Class======================================================================


  //EVENT LISTENERS=============================================================
  gameScreen.addEventListener("click", splat)


  //FUNCTIONS===================================================================
  function spawnEnemy(){
    let enemy = new Image(100, 100)
    // let enemy = bug
    enemy.onload = {

    }
    enemy.src = "images/ahh_bug.png"
    enemy.id = "bug"
    enemy.dataset.id = bugId++
    let x = Math.random() * 850
    let y = Math.random() * 450
    if ((y > 60 && y < 450) && (x > 10 && x < 850)) {
      enemy.style = `position:absolute; left:${x}px; top: ${y}px;`
      gameScreen.appendChild(enemy)
    } else {
      spawnEnemy()
    }
    // debugger
  }

  function multipleEnemies(){
    var times = 1;
    for(var i=0; i < times; i++){
      setInterval(spawnEnemy, 1000)
      // debugger
    }
  }

  function splat(e){
    console.log(e.target);
    if (e.target.id === "bug") {
      e.target.src = "images/red_splat.png"
      console.log("splat");
    }
    setTimeout(function(){
      // debugger
      var splatImg = gameScreen.querySelector('#bug');
      gameScreen.removeChild(splatImg)
    }, 1000)
  }


  // spawnEnemy()
  // multipleEnemies()
})
