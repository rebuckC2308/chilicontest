/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import { BASEURL } from '@env';

export const createEntry = async ({
  currentContestID,
  name,
  imageURL,
  description,
  setShouldFetchEntries,
  setShowCreateEntryForm,
}) => {
  const index = Math.floor(Math.random() * 10) % 5;
  const randomImages = [
    'https://assets.epicurious.com/photos/5a9485cfd8f5fb6b3a2e1aed/master/w_1280,c_limit/shutterstock_313246001.jpg',
    'https://assets.epicurious.com/photos/54beca322a4b69f8647ef1a5/16:9/w_1280,c_limit/vegan-chili-6x4.jpg',
    'https://assets.epicurious.com/photos/54ad58076529d92b2c044921/master/w_1280,c_limit/51201610_upstate-chili_1x1.jpg',
    'https://assets.epicurious.com/photos/578d1fe51edb4f17303e3f0f/master/w_1280,c_limit/vegetarian-black-bean-chili.jpg',
    'https://assets.epicurious.com/photos/54f89fd1e77a7de9330672b2/master/w_1280,c_limit/237096_beef-and-dark-beer-chili_6x4.jpg'];

  try {
    const response = await fetch(`${BASEURL}/createEntry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currentContestID,
        name,
        imageURL: randomImages[index],
        description,
      }),
    });

    const { status } = response;
    const {
      entries, errorMessage,
    } = await response.json();

    switch (status) {
      case 200:
        // eslint-disable-next-line no-console
        setShouldFetchEntries(true);
        setShowCreateEntryForm(false);
        return;
      default:
        // eslint-disable-next-line no-console
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};
