const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

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
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
  
var k = 1;
var nowTime = new Date();
var deadlineTime = nowTime.setMinutes(nowTime.getMinutes() + 1);
var timer = setInterval(function() {
    var now = new Date().getTime();
    var remainder = deadlineTime - now;
    var h = Math.floor( (remainder % (1000 * 60 * 60)) / (1000 * 60) );
    var s = Math.floor( (remainder % (1000 * 60)) / 1000 );
    h = h < 10 ? "0" + h : h;
    s = s < 10 ? "0" + s : s;
    document.getElementById("deadline-timer").innerHTML = h + ":" + s;
    
    if (remainder <= 0) {
      window.location.href = 'first.html';
    }
  }, 1000);