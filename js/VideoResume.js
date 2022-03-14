import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Pressable, StyleSheet, Text, View} from 'react-native';
import isEmpty from 'lodash/isEmpty';

import {Camera, useCameraDevices} from 'react-native-vision-camera';

import {LoadingView} from './LoadingView';
import {Counter} from './Counter';

import VideoPlayer from 'react-native-video-controls';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';

export const VideoResume = () => {
  const navigation = useNavigation();
  const camera = useRef();
  const player = useRef();
  const [tId, setTimerId] = useState();
  const [video, setVideoFile] = useState({});
  const [permissionState, setPermissionState] = useState(null);
  const [timeOptions, setTimeOptions] = useState(5);
  const [isRecording, setIsRecording] = useState(false);
  const devices = useCameraDevices();
  const device = devices.front;
  console.log('devices', device);

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

  const handleStartRecord = async () => {
    setIsRecording(true);
    await camera.current.startRecording({
      flash: 'on',
      onRecordingFinished: video => {
        console.log(video);
        setVideoFile(video);
      },
      onRecordingError: error => console.error(error),
    });

    const timerId = setTimeout(async () => {
      await camera.current.stopRecording();
      setIsRecording(false);
    }, timeOptions * 1000);
    setTimerId(timerId);
  };

  const handleRerecord = () => {
    setVideoFile({});
  };

  const handleCancel = async () => {
    clearTimeout(tId);
    setIsRecording(false);
    navigation.goBack();
  };

  if (!device) {
    return <LoadingView />;
  }

  return (
    <View style={styles.centeredView}>
      {!permissionState && <Text>No camera and microphone permission</Text>}
      <View style={styles.modalView}>
        {!isEmpty(video) ? (
          <SafeAreaView style={[styles.player, StyleSheet.absoluteFill]}>
            <View style={styles.videoCont}>
              <VideoPlayer
                source={{uri: video.path}}
                disableBack
                disableVolume
                disableFullscreen
              />
            </View>
            <View style={styles.vidController}>
              <Pressable
                style={[styles.button, styles.rerecord]}
                onPress={handleRerecord}>
                <Text style={styles.timeOptionSelectedText}>Re-record</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.confirm]}
                onPress={() => console.log('confirm button')}>
                <Text style={styles.btnText}>Confirm</Text>
              </Pressable>
            </View>
          </SafeAreaView>
        ) : (
          <>
            <Camera
              ref={camera}
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={isEmpty(video)}
              video={true}
              audio={true}
            />
            <View style={styles.btnContainer}>
              <View style={styles.counter}>
                {isRecording && <Counter time={timeOptions} />}
              </View>
              <View>
                {!isRecording && (
                  <View style={styles.timeContainer}>
                    <Pressable
                      style={[
                        styles.timeButton,
                        timeOptions === 30 && styles.timeButtonSelected,
                      ]}
                      onPress={() => setTimeOptions(30)}>
                      <Text
                        style={[
                          styles.timeOptionText,
                          timeOptions === 30 && styles.timeOptionSelectedText,
                        ]}>
                        30
                      </Text>
                    </Pressable>
                    <Pressable
                      style={[
                        styles.timeButton,
                        timeOptions === 60 && styles.timeButtonSelected,
                      ]}
                      onPress={() => setTimeOptions(60)}>
                      <Text
                        style={[
                          styles.timeOptionText,
                          timeOptions === 60 && styles.timeOptionSelectedText,
                        ]}>
                        60
                      </Text>
                    </Pressable>
                    <Pressable
                      style={[
                        styles.timeButton,
                        timeOptions === 90 && styles.timeButtonSelected,
                      ]}
                      onPress={() => setTimeOptions(90)}>
                      <Text
                        style={[
                          styles.timeOptionText,
                          timeOptions === 90 && styles.timeOptionSelectedText,
                        ]}>
                        90
                      </Text>
                    </Pressable>
                  </View>
                )}
                <View style={styles.bottomBtns}>
                  <Pressable
                    style={[styles.button, styles.btnBack]}
                    onPress={handleCancel}>
                    <Text style={styles.btnTextDark}>Cancel</Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.button,
                      styles.btnRecord,
                      isRecording && styles.recordingBtn,
                    ]}
                    onPress={() => !isRecording && handleStartRecord()}>
                    <Text style={styles.btnText}>
                      {isRecording ? 'Recording...' : 'Record'}
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
};
