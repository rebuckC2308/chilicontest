// eslint-disable-next-line import/no-unresolved
import { BASEURL } from '@env';

// eslint-disable-next-line import/prefer-default-export
export const handleLogin = async (username, password, navigation) => {
  // Example POST method implementation:
  // Default options are marked with *

  try {
    const response = await fetch(`${BASEURL}/login`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        username,
        password,
      }), // body data type must match "Content-Type" header
    });

    const res = await response.json();
    navigation.navigation.navigate('Starter Screen');
    return res; // parses JSON response into native JavaScript objects
  } catch (error) {
    console.error(`Error in handleRegister ${error}`);
    return null;
  }
};
