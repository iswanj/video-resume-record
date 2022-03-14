/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Home} from './js/Home';
import {VideoResume} from './js/VideoResume';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VideoResume"
          component={VideoResume}
          options={{headerShown: false, presentation: 'modal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
