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
    'https://www.thewholesomedish.com/wp-content/uploads/2018/05/600-X-900.jpg',
    'https://assets.epicurious.com/photos/54beca322a4b69f8647ef1a5/16:9/w_1280,c_limit/vegan-chili-6x4.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuc-N8kYmfUeAJMHtMdKbK2Om2A-FHjfVgQA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReR-73O6Oz310sjqaObRoxNl3IlRMx9P_X9w&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4BJnvODkVanuVdSC5x_6FNvBMob4RJpvVw&usqp=CAU'];

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
