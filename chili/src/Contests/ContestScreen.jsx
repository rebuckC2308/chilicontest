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
  KeyboardAvoidingView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import { globalColors } from '../styles';
import { styles as contestStyles } from './contestStyles';
import { ErrorModal } from '../Modal/ErrorModal';
import { ModalContext } from '../Contexts/ModalContext';
import { ContestContext } from '../Contexts/ContestContext';
import { CreateEntryForm } from '../Components/CreateEntryForm';
import { getAllEntries } from '../Helpers/getAllEntries';
import { CameraContext } from '../Contexts/CameraContext';
import { useHeaderHeight } from '@react-navigation/elements';

// import { LoadingSpinner } from '../Components/LoadingSpinner';

const { width, height } = Dimensions.get('window');

function EntriesContent({ entry }) {
  const {
    name, imageurl, description,
  } = entry;
  const { image } = useContext(CameraContext);

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
            height: height * 0.45,
          }}
          // This is here to show us the format we need for url to bucket (presigned url)
          source={{uri: "https://chili-images.s3.us-east-1.amazonaws.com/e7433312-6177-4b34-b06f-66412efed170.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIEWVE0NAM79cBv9G4dwpIhLWOaV7ChvFTc9r76JJQLT%2BAiEA%2FgiXqfngT73hpWHGYSDuQyMcfl4pO8oyJfnrz5gn0PMq7QIIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3MTE2NzI0ODkwMzkiDC3OdqvmfBSYEY4LpirBAm3R5SATlc%2F%2Bsa9x0%2B5mum7YYsBSuRZDede373COjfjiH2mwPIjmvJTjg0IYFpZl3FM5Li%2BU8eHAI5Qr8Ew7sui5FC1c7%2BdKyoVYDoQbYJx4QtJP98n4vn%2BdUnKAdKh9UpnSrGUdceIUAtBCXlumSUVdY3kXAOJvKwVcSy5j16DoxBCQgwZm6kI2P%2BGbEZZVlWWwdVBhJcvFcDgksTEttwT5yyvxrsxvb%2BHg8gmWo6WomAUg2WjUqKAgOmDrwuQhEhNJbDKWo02HVa%2FPZ%2B2hEZE4EDyZp55ILgDmV0Y4aNbxCsnDlJ6utHf%2FZBb7p%2BqD9ljk22wqa8g797jnquWyfgH5RkfN5dcGf1f67ZilUyiU8jowo44CXahJiAkopELP2pgSQ9LW2MwpMtsuxLIwORhLcix234BhWKrs8N0sWlubVjDf7K2SBjqzAjHQwWs2x9uMsjPYMY%2FfcUeclCi6w7%2FL0mHnMWYBAttK4%2F5bOqVzW5wgcgpIbhHaSX3adIpj7GN3qGLjfUuvvfAPgirOkOL3csPyB9U2Dzp%2FaY25pkEDuEJmFVi5uHO%2FAoDblndcOCtk5vQEUqUVvs9r1sg5pJqIQp0EK%2BDqxzGO9%2BX%2FC%2BgxHlLAlveKNRbO7YwJSuF64Fu%2FD1p7sZ0ByJ%2FXVgnig8fi0xUefoMDlVnsfmeJid7HaIQUv0XclkpipQMMv28dW0s4mdsz78QHwDyn4%2FSXSgjrmt2cmS9F%2FAup9eegFWFcc2R8cEK6rM8NRhBc8T%2BJUrc%2BmlS3QyhXq5zsvaakWwfNGd7lnnxls6gncf7%2B1hQ0JRYc4RBvSvySJznCTpiseZCHzWUdBer1TTeyIdk%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220404T235658Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2LMX4MRHYJTWOJ6Z%2F20220404%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=effcb9054678c34992ff0db6d3570ca25b3bb48a73f296c80df8b1a4a60be3ad"}}
          // source={{ uri: `data:image/jpeg;base64,${imageurl}` }}
        />
        <Text>{`${description}`}</Text>
      </Card>
    </View>
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
      {entries && (entries.map((entry) => <EntriesContent entry={entry} key={entry.id} />))}
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
  const buttonStyle = contestStyles.cancelButton


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
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset = {headerHeight}
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
          {!showCreateEntryForm &&
            <View style={contestStyles.buttonContainer}>
              <AddEntryButton />
            </View>
          }
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
