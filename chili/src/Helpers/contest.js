// eslint-disable-next-line import/no-unresolved
import { BASEURL } from '@env';

export const createContest = async ({ setIsLoading }) => {
  try {
    // loading spinner
    setIsLoading(true);

    const response = await fetch(`${BASEURL}/createContest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'chiliDOG',
      }),
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  } finally {
    setTimeout(
      () => setIsLoading(false),
      5000,
    );
  }

  // Contact endpoint to insert contest into DB
};
