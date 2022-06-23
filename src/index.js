import './index.css';
import addNewUser from './modules/user.js';
import getAllUsers from './modules/getusers.js';

// Invoke function to post a new game
const GAME_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mqjI7JMIJrbkGE6l9z49/scores/';

const button = document.getElementById('btn');
const submit = document.getElementById('submit');

const name = document.getElementById('name');
const score = document.getElementById('score');

submit.disabled = true;
// Enable Submit Button when input fields are filled

const checkInput = () => {
  if (name.value === '' || score.value === '') {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
};

name.addEventListener('input', checkInput);
score.addEventListener('input', checkInput);

// Post a new user for current game
submit.addEventListener('click', () => {
  const data = {
    user: name.value,
    score: score.value,
  };
  addNewUser(GAME_URL, data);
  name.value = '';
  score.value = '';
  submit.disabled = true;
});

// Refresh Leaderboard
const populateUsers = async () => {
  const userData = await getAllUsers(GAME_URL);

  const list = document.querySelector('.list');
  list.innerHTML = '';
  let textData = '';
  userData.forEach((user) => {
    textData += `<li>${user.user}: ${user.score}</li>`;
  });
  list.innerHTML = textData;
};

button.addEventListener('click', populateUsers);
populateUsers();
