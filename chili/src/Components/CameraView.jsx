/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet, Text, View, Button, TouchableOpacity,
} from 'react-native';
import { Camera } from 'expo-camera';
import { CameraContext } from '../Contexts/CameraContext';

export default function CameraView({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const { setImage } = useContext(CameraContext);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    const options = {
      base64: true,
      quality: 0.1,
    };
    if (camera) {
      const data = await camera.takePictureAsync(options);
      // console.log(data.uri)
      setImage(data);
      navigation.navigate('Contest Screen');
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        ref={(ref) => setCamera(ref)}
        style={styles.camera}
        type={type}
      >

        <View style={styles.buttonContainer}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              flex: 1,
              width: '100%',
              padding: 20,
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                alignSelf: 'center',
                flex: 1,
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                onPress={takePicture}
                style={{
                  width: 70,
                  height: 70,
                  bottom: 0,
                  borderRadius: 50,
                  backgroundColor: '#fff',
                }}
              />
            </View>
          </View>
          <Button
            style={styles.button}
            title="Flip Image"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back,
              );
            }}
          />
          {/* {image && <Image source={{ uri: image }} style={{ flex: 1 }} />} */}
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    // backgroundColor: 'transparent',
    flexDirection: 'column',
    margin: 20,
  },
  button: {
    // flex: 0.1,
    // alignSelf: 'flex-end',
    alignItems: 'center',
    height: 40,
    width: 70,
    borderRadius: 4,
    backgroundColor: '#14274e',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
