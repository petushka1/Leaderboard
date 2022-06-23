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
  addNewUser(GAME_URL, name, score);
  name.value === '';
  score.value === '';
});

// Refresh Leaderboard
button.addEventListener('click', async () => {
  const userData = await getAllUsers(GAME_URL);

  const list = document.querySelector('.list');
  list.innerHTML = '';

  for (const user in userData) {
    const item = document.createElement('li');
    item.textContent = `${user.user}: ${user.score}`;
    list.appendChild(item);
  }
})






/*


submit.addEventListener('click', () => {

  fetch(GAME_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: `${name.value}`, score: `${score.value}` }),
  })
  .then((result) => {
    alert(result.json());
  });

  name.value = '';
  score.value = '';
});


async function getUsersScores(url) {
  let userData;
  const list = document.querySelector('.list');
  try {
      const response = await fetch(url);
      userData = await response.json().result;
  } catch (e) {
    console.log(`Error: ${e}`);
  }
  list.innerHTML = '';

  for (const user of userData) {
    const item = list.createElement('li');
    item.textContent = `${user.user}: ${user.score}`;
    list.appendChild(item);
  }
}
getUsersScores(GAME_URL);

button.addEventListener('click', () => {
  getUsersScores(GAME_URL);
});

*/
