/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-unresolved
import { BASEURL } from '@env';

export const handleRegister = async (username, password, navigation) => {
  try {
    const response = await fetch(`${BASEURL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const res = await response.json();
    navigation.navigation.navigate('Starter Screen');

    return res; // parses JSON response into native JavaScript objects
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('OOPS ERROR!');
    return null;
  }
};
