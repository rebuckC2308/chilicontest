import React from 'react';
import {
  View, Text, Modal, Pressable,
} from 'react-native';
import { styles } from './errorModalStyles';

export function ErrorModal({
  setShouldDisplayErrorModal,
  shouldDisplayErrorModal,
  errorModalText,
}) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={shouldDisplayErrorModal}
      onRequestClose={() => {
        setShouldDisplayErrorModal(!shouldDisplayErrorModal);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{errorModalText}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setShouldDisplayErrorModal(!shouldDisplayErrorModal)}
          >
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
