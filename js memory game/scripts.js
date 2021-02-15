const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstClick = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!firstClick) {
    time();
  }
  firstClick = true;
  if (!hasFlippedCard) {
    // first click

    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  let score = document.querySelector("#score").innerHTML;
  score++;
  document.querySelector("#score").innerHTML = score;

  if (score == 6) {
    swal({
      title: "WINNER WINNER!",
      text: "You finished the game!",
      icon: "success",
    });
    resetBoard();
  }

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

function time() {
  let secs = 0;
  let mins = 0;
  let SS;
  let MM;
  setInterval(() => {
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
    }

    secs < 10 ? (SS = `0${secs}`) : (SS = `${secs}`);
    mins < 10 ? (MM = `0${mins}`) : (SS = `${mins}`);

    document.querySelector("#time").innerHTML = `${MM}:${SS}`;
  }, 1000);
}
