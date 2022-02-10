// eslint-disable-next-line import/no-unresolved
import { BASEURL } from '@env';

export const getAllEntries = async (id, setEntries) => {
  try {
    const response = await fetch(`${BASEURL}/getAllEntries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const { status } = response;
    const res = await response.json();

    switch (status) {
      case 200:
        console.log(res);
        setEntries(res);
        return;
      default:
        console.log(res.errorMessage);
        break;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error in getAllEntries ${error}`);
  }
};
