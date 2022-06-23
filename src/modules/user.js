export async function addNewUser(url, data) {
  const request = new Request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const response = await fetch(request);
  console.log(response.json());
}
