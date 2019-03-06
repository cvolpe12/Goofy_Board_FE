document.addEventListener('DOMContentLoaded', () => {
  //VARIABLES===================================================================
  const gameCanvas = document.querySelector("#game-canvas")
  const gameScreen = document.querySelector('#game-screen')
  const dead = document.querySelector('#splat')
  const bug = document.querySelector('#bug')
  const scoreCount = document.querySelector('#score')
  const usersURL = "http://localhost:3000/api/v1/users"
  const scoresURL = "http://localhost:3000/api/v1/scores"
  let bugLoop = setInterval(spawnEnemy, 1000)
  let gameStatus = false
  let bugId = 1
  let hit = []
  let missedBugs = []
  let screenBugs = []

  // document.addEventListener("click", (e)=>{console.log(e)})
  // THINGS TO DO ==============================================================
  // remove bug after interval (from dom(removeChild) and array(pop)?)
  // bugs dont overlap


  //EVENT LISTENERS=============================================================
  gameScreen.addEventListener("click", splat)


  //FUNCTIONS===================================================================

  function gameOver(){

  }

  function spawnEnemy(){
    let enemy = new Image(100, 100)
    let x = Math.random() * 850
    let y = Math.random() * 590
    if ((y > 100 && y < 590) && (x > 10 && x < 850)) {
      enemy.src = "images/ahh_bug.png"
      enemy.id = "bug"
      enemy.dataset.id = bugId++
      enemy.style = `position:absolute; left:${x}px; top: ${y}px;`
      gameScreen.appendChild(enemy)
      screenBugs.push(enemy)
    } else {
      spawnEnemy()
    }
    if (screenBugs.length > 5) {
      gameStatus = true
      gameFlow()
    }
  }

  function gameFlow(){
    if(gameStatus === false){
      bugLoop
    } else {
      console.log("game over")
      clearInterval(bugLoop)
      gameScreen.removeEventListener("click", splat)
    }
  }

  function splat(e){
    // console.log(e.target);
    if (e.target.id === "bug") {
      e.target.src = "images/red_splat.png"
      e.target.id = "splat"
      score(e.target)
    }
    setTimeout(function(){
      var splatImg = gameScreen.querySelector('#splat');
      gameScreen.removeChild(splatImg)
    }, 1000)
  }

  function score(deadBug){
    hit.push(deadBug)
    let index = screenBugs.indexOf(deadBug)
    if (index > -1) {
      screenBugs.splice(index, 1)
    }
    scoreCount.innerHTML = `Score: ${hit.length}`
  }


  gameFlow()

  // spawnEnemy()
  // multipleEnemies()
  // gameOver()

}) //end of DOMContentLoaded
