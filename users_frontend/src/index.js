document.addEventListener('DOMContentLoaded', () => {
  //VARIABLES===================================================================
  const gameCanvas = document.querySelector("#game-canvas")
  const gameScreen = document.querySelector('#game-screen')
  const dead = document.querySelector('#splat')
  const bug = document.querySelector('#bug')
  const scoreCount = document.querySelector('#score')
  let bugId = 1
  let hit = []
  let miss = []
  let screenBugs = []

  document.addEventListener("click", (e)=>{console.log(e)})
  // THINGS TO DO ==============================================================
  // remove bug after interval (from dom(removeChild) and array(pop)?)
  // bugs dont overlap


  //EVENT LISTENERS=============================================================
  gameScreen.addEventListener("click", splat)


  //FUNCTIONS===================================================================
  function spawnEnemy(){
    let time = 0
    let enemy = new Image(100, 100)
    enemy.src = "images/ahh_bug.png"
    enemy.id = "bug"
    enemy.dataset.id = bugId++
    let x = Math.random() * 850
    let y = Math.random() * 590
    //if bug doesn't collide with div && doesn't collide with another bug
    if ((y > 100 && y < 590) && (x > 10 && x < 850)) {
      enemy.style = `position:absolute; left:${x}px; top: ${y}px;`
      gameScreen.appendChild(enemy)
      screenBugs.push(enemy)
    } else {
      spawnEnemy()
    }
    console.log(screenBugs);
    //
    //
    //
    // debugger
  }

  function multipleEnemies(time){
    var times = 1;
    // debugger
    for(var i=0; i < times; i++){
      setInterval(spawnEnemy, time)
      console.log(time);
    }
  }

  function splat(e){
    // console.log(e.target);
    if (e.target.id === "bug") {
      e.target.src = "images/red_splat.png"
      e.target.id = "splat"
      // console.log("splat");
      score(e.target)
    }
    setTimeout(function(){
      // debugger
      var splatImg = gameScreen.querySelector('#splat');
      // debugger
      gameScreen.removeChild(splatImg)
    }, 1000)
  }

  function score(deadBug){
    hit.push(deadBug)
    if(hit.length%10 === 0) {
      speedUp()
    }
    scoreCount.innerHTML = `Score: ${hit.length}`
  }

  function speedUp(){
    if(hit.length < 10){
      multipleEnemies(2000)
    } else if (hit.length >= 10){
      multipleEnemies(1000)
    }
  }
  // spawnEnemy()
  // speedUp()

}) //end of DOMContentLoaded
