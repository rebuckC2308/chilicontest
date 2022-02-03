import React, { useContext } from 'react';
import {
  View, Text, Button, Image, Dimensions, ScrollView,
} from 'react-native';
import { Card } from 'react-native-elements';
import SvgComponent from '../TestComponent';
import { globalColors } from '../styles';
import { styles } from './contestStyles';
import { ErrorModal } from '../Modal/ErrorModal';
// import { LoadingSpinner } from '../Components/LoadingSpinner';
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
      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title>{`${name}`}</Card.Title>
        <Card.Divider />
        <Image
          style={{
            width: width * 0.8,
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

  //   currentContestID, isLoading,

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
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.titleText}>Chili Cookoff</Text>
        </View>
        <View style={styles.logo}>
          <SvgComponent />
        </View>
      </View>
      <View>
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
      </View>
    </View>
  );
}
