import React from 'react';
import {
  ActivityIndicator, StyleSheet, Text, View,
} from 'react-native';
import { globalColors } from '../styles';

export function LoadingSpinner() {
  return (
    <ActivityIndicator size={75} color={globalColors.ORANGE} />
  );
}

const styles = StyleSheet.create({});
