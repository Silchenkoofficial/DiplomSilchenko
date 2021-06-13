import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Wrapper } from './Screens';

import {NavigationContainer} from '@react-navigation/native';

import {Drawer} from './src/Components';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function App() {

  const [showMenu, setShowMenu] = useState(false);

  const [loaded] = useFonts({
    LeckerliOne: require('./assets/fonts/LeckerliOne.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View>
      <NavigationContainer>
        {/* Drawer Menu */}
        <Drawer width={SCREEN_WIDTH / 1.42} />
        {/* Main Screen */}
        <Wrapper showMenu={showMenu} toggleMenu={() => setShowMenu(!showMenu)} />
      </NavigationContainer>
      <StatusBar style='dark' />
    </View>
  );
}