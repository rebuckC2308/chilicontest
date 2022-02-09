import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { styles as entryFormStyles } from '../Entries/entryFormStyle';

export function CreateEntryForm() {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDiscription] = useState('');

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
          onPress={() => console.log(name, description, imageURL)}
        />
      </View>
    </View>
  );
}
