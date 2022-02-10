// eslint-disable-next-line import/no-unresolved
import { BASEURL } from '@env';
// import { getAllEntries } from './getAllEntries';

export const getContestEntries = async ({ contestPIN, setCurrentContestID, navigation }) => {
  try {
    const response = await fetch(`${BASEURL}/getContestEntries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ contestPIN }),
    });

    const { status } = response;
    const res = await response.json();
    console.log(res.id);

    switch (status) {
      case 200:
        console.log('Success Getting Entries');
        setCurrentContestID(res.id);
        navigation.navigate('Contest Screen');
        return;
      default:
        console.error(res.errorMessage);
        break;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error in getContestEntries ${error}`);
  }
};
