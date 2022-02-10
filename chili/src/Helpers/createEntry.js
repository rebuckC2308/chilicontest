// eslint-disable-next-line import/no-unresolved
import { BASEURL } from '@env';

export const createEntry = async (currentContestID, name, imageURL, description) => {
  try {
    const response = await fetch(`${BASEURL}/createEntry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currentContestID,
        name,
        imageURL,
        description,
      }),
    });

    const { status } = response;
    const {
      entryName, entryImageURL, entryDescription, errorMessage,
    } = await response.json();

    switch (status) {
      case 200:
        // eslint-disable-next-line no-console
        console.log(`Succesfully created an entry named ${entryName}, it's imageURL is ${entryImageURL}, and it's description is ${entryDescription}. `);
        console.log('Successfully created entry');
        return;
      default:
        // eslint-disable-next-line no-console

        console.log(`Oops there was an error: ${errorMessage}`);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};
