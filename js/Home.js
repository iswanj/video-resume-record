import React, {useState, useEffect} from 'react';
import {
  View,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  Pressable,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Camera} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';

export const Home = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const [permissionState, setPermissionState] = useState(null);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.getCameraPermissionStatus();
      const microphonePermission = await Camera.getMicrophonePermissionStatus();

      if (
        cameraPermission !== 'authorized' ||
        microphonePermission === 'not-determined'
      ) {
        const newCameraPermission = await Camera.requestCameraPermission();
        const newMicrophonePermission =
          await Camera.requestMicrophonePermission();

        if (
          newCameraPermission !== 'authorized' ||
          newMicrophonePermission === 'not-determined'
        ) {
          setPermissionState(false);
        }
      }

      setPermissionState(true);
    })();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={backgroundStyle}>
        <View style={styles.wrapper}>
          {!permissionState && <Text>No camera and microphone permission</Text>}

          <Text style={styles.title}>Video Resume Recorder</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => navigation.navigate('VideoResume')}>
            <Text style={styles.btnText}>Open Recorder</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
