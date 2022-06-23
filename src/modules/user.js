/* eslint-disable no-unused-vars */
export default async function addNewUser(url, data) {
  const request = new Request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  // Uncomment to test result
  const response = await fetch(request);
}
