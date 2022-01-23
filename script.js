// Elements from the page
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnReset = document.querySelector('.btn--new');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

// Initial State
let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Utility Functions
const randomDiceRoll = () => Math.ceil(Math.random() * 6);

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

// Event Listeners
btnRoll.addEventListener('click', function () {
  // 1. Get a random dice roll
  const dice = randomDiceRoll();
  // 2. Check if dice roll is 1 or not
  if (dice !== 1) {
    currentScore += dice;
    diceEl.classList.remove('hidden');
    diceEl.src = `./Images/dice-${dice}.png`;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  console.log('Holding');
});

btnReset.addEventListener('click', function () {
  console.log('New Game');
});
