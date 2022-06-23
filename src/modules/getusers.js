export async function getAllUsers(url) {

  try {
    const response = await fetch(url);

    if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
    const users = await response.json();
    console.log(users.result);
    return await users.result;


  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
