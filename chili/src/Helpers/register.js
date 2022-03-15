/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-unresolved
import { BASEURL } from '@env';

export const handleRegister = async (
  username,
  password,
  navigation,
  setShouldDisplayErrorModal,
  setErrorModalText,
  setIsLoading,
  setGlobalUserName,
) => {
  try {
    setIsLoading(true);
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

    const { status } = response;
    const res = await response.json();

    switch (status) {
      case 201:
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
