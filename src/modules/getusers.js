export async function getAllUsers(url) {
  try {
    const response = fetch(url);
    if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
    const userData = await response.json().result;
    return userData
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
