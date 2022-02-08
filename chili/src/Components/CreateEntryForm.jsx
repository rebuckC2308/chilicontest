import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { globalColors } from '../styles';
import Spacer from './Spacer';
import { styles as entryFormStyles } from '../Entries/entryFormStyle';

export function CreateEntryForm() {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDiscription] = useState('');

  return (
    <View style={entryFormStyles.container}>
      <Spacer>
        <Text style={entryFormStyles.formLabel}>Add an Entry</Text>

      </Spacer>
      <View style={entryFormStyles.inputs}>
        <Spacer>
          <Input
            placeholder="Enter Entry Name"
            autoComplete="off"
            onChangeText={setName}
          />
        </Spacer>
        <Spacer>
          <Input
            placeholder="Enter Description"
            autoComplete="off"
            onChangeText={setDiscription}
          />
        </Spacer>
        <Spacer>
          <Input
            placeholder="Image"
            autoComplete="off"
            onChangeText={setImageURL}
          />
        </Spacer>
      </View>
      <View>
        <Button
          containerStyle={{
            width: 200,
            alignSelf: 'center',
            marginVertical: 10,
          }}
          buttonStyle={{
            backgroundColor: globalColors.ORANGE,
          }}
          title="Submit Entry"
        // eslint-disable-next-line no-console
          onPress={() => console.log(name, description, imageURL)}
        />
      </View>
    </View>
  );
}
