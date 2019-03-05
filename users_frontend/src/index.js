document.addEventListener('DOMContentLoaded', () => {
  //VARIABLES===================================================================
  const gameCanvas = document.querySelector("#game-canvas")
  const gameScreen = document.querySelector('#game-screen')
<<<<<<< HEAD
  const wood = document.querySelector('#wood')
  const tree = document.querySelector('#tree')
  var ctx = gameCanvas.getContext("2d")

  // gameCanvas.addEventListener("click", (e)=>{
  //   console.log(e.target);
  // })
  gameScreen.addEventListener("click", splat)

  function spawnEnemy(){
    let enemy = tree
=======
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
>>>>>>> ssdebug1
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
<<<<<<< HEAD
    if (e.target.id === "tree") {
      e.target.src = "images/firewood.png"
=======
    if (e.target.id === "bug") {
      e.target.src = "images/red_splat.png"
>>>>>>> ssdebug1
      console.log("splat");
    }
    setTimeout(function(){
      debugger
      var splatImg = gameScreen.querySelector('#bug');
      gameScreen.removeChild(splatImg)
    }, 1000)
  }

<<<<<<< HEAD

=======
  //CALLS=======================================================================
>>>>>>> ssdebug1
  spawnEnemy()
})
