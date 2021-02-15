const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

console.log(
  highScores
    .map((score) => {
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("")
);

console.log(
  highScores.map((score) => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
);
//we are using map so we can show each name and score in the html page
//join for getting li content from array to string
