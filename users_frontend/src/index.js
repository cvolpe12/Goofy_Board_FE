document.addEventListener('DOMContentLoaded', () => {
  //VARIABLES===================================================================
  const gameCanvas = document.querySelector("#game-canvas")
  const gameScreen = document.querySelector('#game-screen')
  const dead = document.querySelector('#splat')
  const bug = document.querySelector('#bug')
  const scoreCount = document.querySelector('#score')
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
    // setTimeout(()=> {
    //   missed
    // }, 5000)
    // starts time to 5 sec
    // at 5 sec popped off screen
    // if 5 sec elapses push into miss array
    console.log("screen", screenBugs);
  }
// if screenBugs.forEach(bug.id === splat)
//  push into hit and remove from screenBugs
// else if screenBugs.forEach(bug.id === bug)
//
  function missed(){
    var bugImg = gameScreen.querySelector('#bug');
    // missedBugs.push(bugImg)
    debugger

    gameScreen.removeChild(bugImg)
    console.log(bugImg.dataset.id);
  }

  function multipleEnemies(time){
    var times = 1;
    for(var i=0; i < times; i++){
      setInterval(spawnEnemy, time)
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
    // console.log("allBugs", screenBugs);
    // console.log("#", screenBugs.length);
    // if(hit.length % 10 === 0) {
    //   speedUp()
    // }
    console.log("hit", hit);
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
  // multipleEnemies(2000)

}) //end of DOMContentLoaded
