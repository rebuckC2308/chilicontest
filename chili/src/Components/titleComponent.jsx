import React from 'react';
import {
  View, Text,
} from 'react-native';
import SvgComponent from '../TestComponent';
import { styles } from '../Contests/contestStyles';
// eslint-disable-next-line max-len
// change the styling for this component in order to apply it to all components using the TitleComponent()

export function TitleComponent() {
  return (
    <View style={styles.titleContainer}>
      <View>
        <Text style={styles.titleText}>Chili Cookoff</Text>
      </View>
      <View style={styles.logo}>
        <SvgComponent />
      </View>
    </View>
  );
}
