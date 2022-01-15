import React from 'react';
import {
  ActivityIndicator, StyleSheet,
} from 'react-native';
import { globalColors } from '../styles';

export function LoadingSpinner() {
  return (
    <ActivityIndicator size={75} color={globalColors.ORANGE} />
  );
}

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({});
