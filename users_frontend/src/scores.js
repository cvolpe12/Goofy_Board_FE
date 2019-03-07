const scoresURL = "http://localhost:3000/api/v1/scores"
const scoreList = document.querySelector('#score-list')

function fetchScores(){
  fetch(scoresURL)
  .then(res => res.json())
  .then(scores => {
    scores = scores.sort(compare)
    console.log(scores);
    scores = scores.slice(0, 10)
    scoreList.innerHTML = "<h4>High Scores</h4>"
    scores.forEach(renderScores)
  })
}
fetchScores()

function renderScores(score){
  // debugger
  scoreList.innerHTML += `
  <li>
    ${score.user.username} - ${score.points}
  </li>
  `
}


function compare(a,b) {
  if (a.points < b.points)
    return 1;
  if (a.points > b.points)
    return -1;
  return 0;
}
