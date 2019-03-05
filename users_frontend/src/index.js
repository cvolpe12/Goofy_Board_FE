document.addEventListener("DOMContentLoaded", () => {
  //VARIABLES===================================================================
  const gameCanvas = document.querySelector("#game-canvas")
  const highScoreList = document.querySelector("#score-list")

  let score = 0
  //CALLS=======================================================================
  fetchHighScores()

  //EVENT LISTENERS=============================================================
  gameCanvas.addEventListener("click",(e)=>{
    console.log("click!");
  })

  //FUNCTIONS===================================================================


})
