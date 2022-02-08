import React, { useContext } from 'react';
import {
  View, Text, Button, Image, Dimensions, ScrollView, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import { globalColors } from '../styles';
import { styles } from './contestStyles';
import { ErrorModal } from '../Modal/ErrorModal';
import { UserDetailsContext } from '../Contexts/UserContext';

const entries = [{
  id: 1, name: "Chris's Chili", image: 'https://therecipecritic.com/wp-content/uploads/2020/04/homemadechili_2-667x1000.jpg', description: 'Worlds best chili',
}, {
  id: 2, name: "Jeremy's Chili", image: 'https://therecipecritic.com/wp-content/uploads/2020/04/homemadechili_2-667x1000.jpg', description: 'Worlds worst chili',
}];

const { width, height } = Dimensions.get('window');

function EntriesContent({ entry }) {
  const {
    name, image,
  } = entry;

  return (
    <View>
      <Card containerStyle={
        {
          backgroundColor: globalColors.ORANGE,
          maxWidth: width,
          maxHeight: height * 0.8,
        }
      }
      >
        <Card.Title style={{ fontSize: 30, color: 'white' }}>{`${name}`}</Card.Title>
        <Card.Divider />
        <Image
          style={{
            minWidth: width * 0.8,
            height: height * 0.5,
          }}
          source={{ uri: image }}
        />
      </Card>
    </View>
  );
}

function ContestContentComponent() {
  const {
    globalUserName, shouldDisplayErrorModal, errorModalText,
    setShouldDisplayErrorModal, currentContestAdmin,
  } = useContext(UserDetailsContext);

  return (
    <View>
      <ErrorModal
        setShouldDisplayErrorModal={setShouldDisplayErrorModal}
        shouldDisplayErrorModal={shouldDisplayErrorModal}
        errorModalText={errorModalText}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{`This contest was created by ${currentContestAdmin}`}</Text>
        <Text style={styles.text}>{`${globalUserName}, there are no entries`}</Text>
        <Text style={styles.text}>You should create one and get started</Text>

      </View>
      <View style={styles.buttonContainer}>
        <Button
          color={globalColors.ORANGE}
          title="Create An Entry"
        />
      </View>

    </View>
  );
}

export function ContestScreen() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces
          style={{ marginBottom: 75 }}
        >
          {entries.length
            ? (entries.map((entry) => <EntriesContent entry={entry} key={entry.id} />))
            : <ContestContentComponent />}
        </ScrollView>
        <View style={{ flex: 5, alignItems: 'center' }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: globalColors.ORANGE,
                height: 75,
                width: 250,
                borderRadius: 50,
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000000',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center' }}>
                  <Ionicons name="md-add" size={30} color="white" />
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>
                    Add Entry
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
