export async function addNewUser(url, name, score) {
  const request = new Request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      {
        user: name,
	      score: score
      }
    ),
  })
  const response = await fetch(request);
  return await response.json();
}
