// eslint-disable-next-line import/no-unresolved
import { BASEURL } from '@env';

export const createContest = async ({
  setIsLoading,
  globalUserName,
  navigation,
  setShouldDisplayErrorModal,
  setErrorModalText,
  setCurrentContestAdmin,
  setCurrentContestID,
}) => {
  try {
    // loading spinner
    setIsLoading(true);

    // eslint-disable-next-line no-unused-vars
    const response = await fetch(`${BASEURL}/createContest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: globalUserName,
      }),
    });
    const { status } = response;
    const { admin, contestId, errorMessage } = await response.json();

    switch (status) {
      case 201:
        navigation.navigate('Contest Screen');
        setIsLoading(false);
        setCurrentContestID(contestId);
        setCurrentContestAdmin(admin);

        return;
      default:
        setErrorModalText(errorMessage);
        setShouldDisplayErrorModal(true);
        setIsLoading(false);
        setCurrentContestID('');
        setCurrentContestAdmin('');
        break;
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  } finally {
    setTimeout(
      () => setIsLoading(false),
      5000,
    );
  }
};
