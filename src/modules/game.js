
export async function setNewGame(name) {
const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const request = new Request(API_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({name: `${name}`}),
})
const response = await fetch(request);
return await response.json()
}
