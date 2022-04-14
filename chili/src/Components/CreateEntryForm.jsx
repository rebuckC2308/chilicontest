import React, { useContext } from 'react';
import { View, Image, Dimensions } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { styles as entryFormStyles } from '../Entries/entryFormStyle';
import { createEntry } from '../Helpers/createEntry';
import { ContestContext } from '../Contexts/ContestContext';
import { CameraContext } from '../Contexts/CameraContext';
import Icon from 'react-native-vector-icons/FontAwesome';

export function CreateEntryForm({
  setShouldFetchEntries,
  setShowCreateEntryForm,
  navigation,
  cancelButton
}) {
  const {
    currentContestID, entryName, setEntryName, entryDescription, setEntryDescription,
  } = useContext(ContestContext);
  const { image } = useContext(CameraContext);
  const { width, height } = Dimensions.get('window');

  image && console.log(image.uri)
  return (
    <View style={entryFormStyles.container}>
      <View style={entryFormStyles.inputs}>
        <Spacer>
          <Input
            placeholder="Entry Name"
            autoComplete="off"
            onChangeText={setEntryName}
            inputStyle={{ color: 'white' }}
            placeholderTextColor="white"
          />
        </Spacer>
        <Spacer>
        </Spacer>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Spacer>
            <Button
              buttonStyle={entryFormStyles.button}
              title="Take Picture"
              onPress={() => navigation.navigate('Camera')}
              icon={
                <View style={{ marginRight: 10}}>
                  <Icon
                    name="camera"
                    size={20}
                    color="white"
                  />
                </View>
              }
            />
          </Spacer>
         {image?.uri &&
            <Spacer>
              <Image
                style={{
                  minWidth: width * 0.5,
                  height: height * 0.2,
                }}
                source={{ uri: image.uri }}
              />
            </Spacer>
          }
          <Button
            buttonStyle={entryFormStyles.button}
            title="Submit Entry"
            onPress={() => createEntry({
              currentContestID,
              entryName,
              entryDescription,
              image,
              setShouldFetchEntries,
              setShowCreateEntryForm,
            })}
          />
          <Spacer>
            {cancelButton()}
          </Spacer>
        </View>
      </View>
  );
}
