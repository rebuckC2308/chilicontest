import React, { useState, useContext } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import { ErrorModal } from '../Modal/ErrorModal';
import SvgComponent from '../TestComponent';
import { styles } from './contestStyles';
import { globalColors } from '../styles';
import { LoadingSpinner } from '../Components/LoadingSpinner';
import { UserDetailsContext } from '../Contexts/UserContext';

const contests = 0;

function EntriesContent() {
  return (
    <View>
      <Text>Entry 1</Text>
      <Text>Entry 2</Text>
      <Text>Entry 3</Text>
    </View>
  );
}

function ContestContentComponent() {
  return (
    <View>
      <Text style={styles.text}>It looks like you don't have any entries!</Text>
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

const style = StyleSheet.create({});
