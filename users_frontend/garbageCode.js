for (var i = 0; i < numOfDrops; i++) {
  fallingEnemies.push(enemy)
  parseInt(fallingEnemies[i].style.top) += fallingEnemies[i].speed
  if (parseInt(fallingDrops[i].style.top) > 450) {  //Repeat the raindrop when it falls out of view
   parseInt(fallingDrops[i].style.top) = -25 //Account for the image size
  }
}


// debugger
  function drawCharacter() {
    var character = new Image();
    var enemy1 = new Image();
    var enemy2 = new Image();

    character.onload = ()=>{
      ctx.mozImageSmoothingEnabled = true;
     ctx.webkitImageSmoothingEnabled = true;
     ctx.msImageSmoothingEnabled = true;
     ctx.imageSmoothingEnabled = true;
      ctx.drawImage(character, 450, 450, 100, 100)
    };
    character.src = "images/snowboarder.png"
    character.id = "snowboarder"

    enemy1.onload = ()=>{
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(enemy1, 250, 250, 150, 150)
    };
    enemy1.src = "images/tree.png"

    enemy2.onload = ()=>{
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(enemy2, 550, 250, 50, 50)
    };
    enemy2.src = "images/firewood.png"

  }
  // ctx.drawImage(wood, 250, 250, 50, 50);
  // ctx.drawImage(tree, 400, 400, 150, 150);

  document.addEventListener("keydown", moveCharacter)
  document.addEventListener("click", (e)=> {console.log(e.target);})

  function spawnEnemy(){
    let enemies = [wood, tree]
    var randEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    randPixel = Math.random() * 1000
    randEnemy.style = `position:absolute; left:${randPixel}px; top: 60px;`
  }
// style="position:absolute;left:650px; top:550px;
  function spawnEnemy(){
    numOfDrops = 4
    fallingEnemies = []
    let enemies = [wood, tree]
    var randEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    randPixel = Math.random() * 1000
    randEnemy.style = `position:absolute; left:${randPixel}px; top: 60px;`
    setInterval(moveEnemy(randEnemy), 10000)
  }

  function moveEnemy(enemy){
    parseInt(enemy.style.top) += 10
  }

  // drawCharacter()
  spawnEnemy()
  function moveCharacter(e){
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
    if (parseInt(snowboarder.style.left) >= 920) {
      snowboarder.style.left = 920 + 'px'
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
        snowboarder.style.top = 550 - (-0.1 * x * (x - 50)) + 'px';
        // make sure this number ^ is the same as the snowboarder starting point
        if(x >= 50) clearInterval(interval);
    }, 20);
  }
