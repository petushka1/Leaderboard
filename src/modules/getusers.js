const getAllUsers = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const users = await response.json();
    return users.result;
  } catch (error) {
    return `Error: ${error}`;
  }
};

export default getAllUsers;
