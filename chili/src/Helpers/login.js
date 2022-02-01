// eslint-disable-next-line import/no-unresolved
import { BASEURL } from '@env';

// eslint-disable-next-line import/prefer-default-export
export const handleLogin = async (
  username,
  password,
  navigation,
  setShouldDisplayErrorModal,
  setErrorModalText,
  setIsLoading,
  setGlobalUserName,
) => {
  // Example POST method implementation:
  // Default options are marked with *

  try {
    setIsLoading(true);
    const response = await fetch(`${BASEURL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const { status } = response;
    const res = await response.json();

    switch (status) {
      case 200:
        navigation.navigation.navigate('Starter Screen');
        setIsLoading(false);
        setGlobalUserName(username);
        return;
      default:
        setErrorModalText(res.errorMessage);
        setShouldDisplayErrorModal(true);
        setIsLoading(false);
        break;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error in handleRegister ${error}`);
  }
};
