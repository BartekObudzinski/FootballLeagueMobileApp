import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './src/Navigation/RootNavigator';
import { useFonts } from 'expo-font';
LogBox.ignoreAllLogs();
const App = () => {
  /** If something is unsued at the end, delete it */
  const [fontsLoaded] = useFonts({
    'Baloo-Bold': require('./src/Assets/Fonts/Baloo-Bold.ttf'),
    'Baloo-ExtraBold': require('./src/Assets/Fonts/Baloo-ExtraBold.ttf'),
    'Baloo-Light': require('./src/Assets/Fonts/Baloo-Light.ttf'),
    'Baloo-Regular': require('./src/Assets/Fonts/Baloo-Regular.ttf'),
    'Baloo-SemiBold': require('./src/Assets/Fonts/Baloo-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
