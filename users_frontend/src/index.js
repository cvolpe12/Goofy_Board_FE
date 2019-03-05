document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.querySelector("#game-canvas")
  const gameScreen = document.querySelector('#game-screen')
  const wood = document.querySelector('#wood')
  const tree = document.querySelector('#tree')
  var ctx = gameCanvas.getContext("2d")

  // gameCanvas.addEventListener("click", (e)=>{
  //   console.log(e.target);
  // })
  gameScreen.addEventListener("click", splat)

  function spawnEnemy(){
    let enemy = tree
    let x = Math.random() * 850
    let y = Math.random() * 450
    if ((y > 60 && y < 450) && (x > 10 && x < 850)) {
      enemy.style = `position:absolute; left:${x}px; top: ${y}px;`
    } else {
      spawnEnemy()
    }
  }

  function multipleEnemies(){
    var times = 10;
    for(var i=0; i < times; i++){
      setInterval(spawnEnemy, 1000)
    }
  }

  function splat(e){
    console.log(e.target);
    if (e.target.id === "tree") {
      e.target.src = "images/firewood.png"
      console.log("splat");
    }
  }


  // multipleEnemies()
})
