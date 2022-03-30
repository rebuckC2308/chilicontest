import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { styles as entryFormStyles } from '../Entries/entryFormStyle';
import { createEntry } from '../Helpers/createEntry';
import { ContestContext } from '../Contexts/ContestContext';
import { CameraContext } from '../Contexts/CameraContext';

export function CreateEntryForm({
  setShouldFetchEntries,
  setShowCreateEntryForm,
  navigation,
}) {
  const {
    currentContestID, entryName, setEntryName, entryDescription, setEntryDescription,
  } = useContext(ContestContext);

  const { image } = useContext(CameraContext);

  return (
    <View style={entryFormStyles.container}>
      <View style={entryFormStyles.inputs}>
        <Spacer>
          <Input
            placeholder="Enter Entry Name"
            autoComplete="off"
            onChangeText={setEntryName}
            inputStyle={{ color: 'white' }}
            placeholderTextColor="white"
          />
        </Spacer>
        <Spacer>
          <Input
            placeholder="Enter Description"
            autoComplete="off"
            onChangeText={setEntryDescription}
            inputStyle={{ color: 'white' }}
            placeholderTextColor="white"
          />
        </Spacer>
        <Spacer>
          <Button
            buttonStyle={entryFormStyles.button}
            title="Take Picture"
          // eslint-disable-next-line no-console
            onPress={() => navigation.navigate('Camera')}
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
            entryName,
            entryDescription,
            image,
            setShouldFetchEntries,
            setShowCreateEntryForm,
          })}
        />
      </View>
    </View>
  );
}
