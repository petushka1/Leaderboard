import './index.css';
import { setNewGame } from './modules/game.js';
import { addNewUser } from './modules/user.js';
import { getAllUsers } from './modules/getusers.js';

// Invoke function to post a new game
console.log(setNewGame('new game'));
const GAME_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/528tt6iBqmQslyLP9XIJ/scores/';

const button = document.getElementById('btn');
const submit = document.getElementById('submit');

const form = document. querySelector('.input_data');
const name = document.getElementById('name');
const score = document.getElementById('score');

submit.disabled = true;

// Enable Submit Button when input fields are filled
form.addEventListener('input', () => {

  if (name.value === '' || score.value === '') {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
});

// Post a new user for current game
submit.addEventListener('click', () => {
  let data = {
    user: name.value,
    score: score.value
  }
  addNewUser(GAME_URL, data);
});

// Refresh Leaderboard
button.addEventListener('click', async () => {
  const userData = await getAllUsers(GAME_URL);

  const list = document.querySelector('.list');
  list.innerHTML = '';
  let textData = "";
  for (let user in userData) {
    textData += `<li>${user.user}: ${user.score}</li>`;
  }
  list.innerHTML = textData;
});
