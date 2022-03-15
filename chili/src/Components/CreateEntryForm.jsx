import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { styles as entryFormStyles } from '../Entries/entryFormStyle';
import { createEntry } from '../Helpers/createEntry';
import { ContestContext } from '../Contexts/ContestContext';
import chilibowl from '../images/chilibowl.jpg';

export function CreateEntryForm({
  setShouldFetchEntries,
  setShowCreateEntryForm,
}) {
  const [name, setName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [imageURL, setImageURL] = useState('');
  const [description, setDiscription] = useState('');

  const { currentContestID } = useContext(ContestContext);

  const imageURLTest = chilibowl;

  return (
    <View style={entryFormStyles.container}>
      <View style={entryFormStyles.inputs}>
        <Spacer>
          <Input
            placeholder="Enter Entry Name"
            autoComplete="off"
            onChangeText={setName}
            inputStyle={{ color: 'white' }}
            placeholderTextColor="white"
          />
        </Spacer>
        <Spacer>
          <Input
            placeholder="Enter Description"
            autoComplete="off"
            onChangeText={setDiscription}
            inputStyle={{ color: 'white' }}
            placeholderTextColor="white"
          />
        </Spacer>
        <Spacer>
          <Input
            placeholder="Image"
            autoComplete="off"
            onChangeText={setImageURL}
            inputStyle={{ color: 'white' }}
            placeholderTextColor="white"
          />
        </Spacer>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Button
          buttonStyle={entryFormStyles.button}
          title="Submit Entry"
          // eslint-disable-next-line no-console
          onPress={() => createEntry({
            currentContestID,
            name,
            imageURLTest,
            description,
            setShouldFetchEntries,
            setShowCreateEntryForm,
          })}
        />
      </View>
    </View>
  );
}
