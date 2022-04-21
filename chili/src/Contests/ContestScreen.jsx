/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import { useHeaderHeight } from '@react-navigation/elements';
import { globalColors } from '../styles';
import { styles as contestStyles } from './contestStyles';
import { ErrorModal } from '../Modal/ErrorModal';
import { ModalContext } from '../Contexts/ModalContext';
import { ContestContext } from '../Contexts/ContestContext';
import { CreateEntryForm } from '../Components/CreateEntryForm';
import { getAllEntries } from '../Helpers/getAllEntries';

// import { LoadingSpinner } from '../Components/LoadingSpinner';

const { width, height } = Dimensions.get('window');

function EntriesContent({ entry }) {
  const {
    name, imageurl, description,
  } = entry;

  return (
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
          height: height * 0.45,
        }}
        source={{ uri: imageurl }}
      />
      <Text>{`${description}`}</Text>
    </Card>
  );
}

function NoEntriesComponent() {
  return (
    <View style={contestStyles.textContainer}>
      <Text style={contestStyles.text}>Create an Entry to get started</Text>
    </View>
  );
}

function EntriesCardView({ entries }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces
    >
      {entries
        && (
        <FlatList
          horizontal
          data={entries}
          renderItem={({ item }) => <EntriesContent entry={item} key={item.id} />}
        />
        )}
    </ScrollView>
  );
}

function AddEntryButton() {
  const {
    setShowCreateEntryForm,
    showCreateEntryForm,
  } = useContext(ContestContext);

  const buttonSize = showCreateEntryForm ? 15 : 20;
  const buttonStyle = showCreateEntryForm
    ? contestStyles.cancelButton
    : contestStyles.addEntryButton;

  return (
    <TouchableOpacity
      onPress={() => {
        setShowCreateEntryForm(!showCreateEntryForm);
      }}
    >
      <View
        style={buttonStyle}
      >
        <View style={{ flexDirection: 'row' }}>
          {!showCreateEntryForm && (
          <View style={{ justifyContent: 'center' }}>
            <Ionicons name="md-add" size={30} color="white" />
          </View>
          )}
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: buttonSize }}>
              {showCreateEntryForm ? 'Cancel' : 'Add Entry'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function canelButton() {
  const {
    setShowCreateEntryForm,
    showCreateEntryForm,
  } = useContext(ContestContext);

  const buttonSize = showCreateEntryForm ? 15 : 20;
  const buttonStyle = contestStyles.cancelButton;

  return (
    <TouchableOpacity
      onPress={() => {
        setShowCreateEntryForm(!showCreateEntryForm);
      }}
    >
      <View
        style={buttonStyle}
      >
        {!showCreateEntryForm && (
          <View style={{ justifyContent: 'center' }}>
            <Ionicons name="md-add" size={30} color="white" />
          </View>
        )}
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: buttonSize }}>
            Cancel
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export function ContestScreen({ navigation }) {
  const {
    shouldDisplayErrorModal, errorModalText,
    setShouldDisplayErrorModal,
  } = useContext(ModalContext);
  const headerHeight = useHeaderHeight();

  const {
    currentContestID, entries, setEntries, showCreateEntryForm, setShowCreateEntryForm,
  } = useContext(ContestContext);

  const [shouldFetchEntries, setShouldFetchEntries] = useState(false);

  useEffect(() => {
    getAllEntries(currentContestID, setEntries);
    setShouldFetchEntries(false);
  }, [shouldFetchEntries]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        // eslint-disable-next-line no-undef
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight}
        style={contestStyles.container}
      >
        <ErrorModal
          setShouldDisplayErrorModal={setShouldDisplayErrorModal}
          shouldDisplayErrorModal={shouldDisplayErrorModal}
          errorModalText={errorModalText}
        />
        {!showCreateEntryForm && (
        <View style={contestStyles.mainContent}>
          {entries.length
            ? <EntriesCardView entries={entries} />
            : <NoEntriesComponent />}
        </View>
        )}
        {!showCreateEntryForm
            && (
            <View style={contestStyles.buttonContainer}>
              <AddEntryButton />
            </View>
            )}
        {showCreateEntryForm && (
        <View style={contestStyles.mainContent}>
          <CreateEntryForm
            setShouldFetchEntries={setShouldFetchEntries}
            setShowCreateEntryForm={setShowCreateEntryForm}
            navigation={navigation}
            cancelButton={canelButton}
          />
        </View>
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
