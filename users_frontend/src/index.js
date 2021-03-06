document.addEventListener('DOMContentLoaded', () => {
  //VARIABLES===================================================================
  const gameCanvas = document.querySelector("#game-canvas")
  const gameScreen = document.querySelector('#game-screen')
  const dead = document.querySelector('#splat')
  const bug = document.querySelector('#bug')
  const scoreCount = document.querySelector('#score')
  const usersURL = "http://localhost:3000/api/v1/users"
  const scoresURL = "http://localhost:3000/api/v1/scores"
  const playBtn = document.querySelector('#play')
  const replayBtn = document.querySelector('#replay')
  const newUserForm = document.querySelector('#overlay-3')
  const newForm = document.querySelector('#new-user')
  const diffBtn = document.querySelector('#overlay-2')
  const bloop = document.querySelector('#bloop')
  let bugLoop; // this will run the game
  let gameStatus = false
  let gameDifficulty;
  let bugId = 1
  let hit = []
  let bugPoints;
  let missedBugs = []
  let screenBugs = []

  // document.addEventListener("click", (e)=>{console.log(e)})
  // THINGS TO DO ==============================================================
  // remove bug after interval (from dom(removeChild) and array(pop)?)
  // bugs dont overlap


  //EVENT LISTENERS=============================================================
  gameScreen.addEventListener("click", splat)
  newUserForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    fetchNewUsers()
  })
  replayBtn.addEventListener("click", (e)=>{
    clearScreen()
    chooseDifficulty(e)})
  playBtn.addEventListener("click", chooseDifficulty)
  diffBtn.addEventListener("click", chooseDifficulty)

  //FETCH===================================================================

  function fetchNewUsers(){
    // debugger
    let username = document.querySelector("#username")
    let formScore = document.querySelector('#form-score').value
    formScore = bugPoints
    let scoreData = {
      points: formScore
    }
    fetch(usersURL,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: username.value
      })
    })
    .then(response=>{
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Enter 3 characters');
      }
    })
    .then(userData => {
      // console.log(userData)
      fetch(scoresURL,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          score: {
            points: formScore,
            user_id: userData.id
          }
        })
      })
      .then(res => res.json())
      .then(scoreData => {
        fetchScores()
      })
    })
    .catch(error=>{
      alert(error)
    })
  }



  //FUNCTIONS===================================================================
  function chooseDifficulty(e){
    document.querySelector("#overlay").style.display = "none";
    diffBtn.style.display = "block"
    // debugger
    if (e.target.id === "easy") {
      gameDifficulty = "easy"
      gameFlow(666)
    }
    if (e.target.id === "medium") {
      gameDifficulty = "medium"
      gameFlow(500)
    }
    if (e.target.id === "hard") {
      gameDifficulty = "hard"
      gameFlow(333)
    }
  }

  function gameFlow(time){
    wait(1000)
    diffBtn.style.display = "none"
    newUserForm.style.display = "none";
    // console.log(screenBugs);
    // debugger
    if(gameStatus === false){
      bugLoop = setInterval(spawnEnemy, time)
    } else {
      clearInterval(bugLoop)
      bugLoop = 0
      gameScreen.removeEventListener("click", splat)
      if (bugPoints === undefined) {
        bugPoints = 0
      } else {
        bugPoints = bugPoints
      }
      // debugger
      alert(`GAME OVER! YOUR SCORE IS ${bugPoints}`)
      gameOver()
    }
  }

  function clearScreen(){
    gameScreen.innerHTML = `<canvas id="game-canvas" width="1000" height="600" style="border:1px solid #000000;">
      </canvas>`
    newUserForm.style.display = "none";
    screenBugs = []
    gameStatus = false
    gameScreen.addEventListener("click", splat)
    hit = []
    scoreCount.innerHTML = `Score: ${bugPoints}`
  }

  function spawnEnemy(){
    let enemy = new Image(100, 100)
    let x = Math.random() * 950
    let y = Math.random() * 670
    if ((y > 200 && y < 630) && (x > 40 && x < 950)) {
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
      gameFlow(50)
      // ^^ need to call but could pass arbitrary value
    }
  }
// for difficulty we pass a time arg that will determine bugLoop

  function splat(e){
    // console.log(e.target);
    if (e.target.id === "bug") {
      e.target.src = "images/red_splat.png"
      e.target.id = "splat"
      score(e.target)
      bloop.play()
    }
    setTimeout(function(){
      var splatImg = gameScreen.querySelector('#splat');
      gameScreen.removeChild(splatImg)
    }, 1000)
  }

  function score(deadBug){
    hit.push(deadBug)
    bugPoints = hit.length
    let index = screenBugs.indexOf(deadBug)
    if (index > -1) {
      screenBugs.splice(index, 1)
    }
    if (gameDifficulty === "easy") {
      bugPoints = bugPoints*1000
      scoreCount.innerHTML = `Score: ${bugPoints}`

    }
    if (gameDifficulty === "medium") {
      bugPoints = bugPoints*1500
      scoreCount.innerHTML = `Score: ${bugPoints}`

    }
    if (gameDifficulty === "hard") {
      bugPoints = bugPoints*2000
      scoreCount.innerHTML = `Score: ${bugPoints}`
    }
  }

  function gameOver(){
    newUserForm.style.display = "block"
  }

  function wait(ms){
     var start = new Date().getTime();
     var end = start;
     while(end < start + ms) {
       end = new Date().getTime();
    }
  }



}) //end of DOMContentLoaded
