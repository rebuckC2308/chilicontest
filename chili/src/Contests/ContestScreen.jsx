import React, { useState, useContext } from 'react';
import {
  View, Text, Button,
} from 'react-native';
import SvgComponent from '../TestComponent';
import { globalColors } from '../styles';
import { styles } from './contestStyles';
import { ErrorModal } from '../Modal/ErrorModal';
import { LoadingSpinner } from '../Components/LoadingSpinner';
import { UserDetailsContext } from '../Contexts/UserContext';

const contests = 0;

function EntriesContent() {
  return (
    <View style={{ alignSelf: 'center' }}>
      <Text>Entry 1</Text>
      <Text>Entry 2</Text>
      <Text>Entry 3</Text>
    </View>
  );
}

function ContestContentComponent() {
  const {
    globalUserName, shouldDisplayErrorModal, errorModalText, isLoading,
    setShouldDisplayErrorModal, currentContestAdmin, currentContestID,
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
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.titleText}>Chili Cookoff</Text>
        </View>
        <View style={styles.logo}>
          <SvgComponent />
        </View>
      </View>
      <View>
        {!contests ? <ContestContentComponent /> : <EntriesContent />}
      </View>
    </View>
  );
}
