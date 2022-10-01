import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React from 'react';
import { LogBox } from 'react-native';
import { RootStack } from './src/Navigation/RootNavigator';
LogBox.ignoreAllLogs();
const App = () => {
  const [fontsLoaded] = useFonts({
    'Baloo-Bold': require('./src/Assets/Fonts/Baloo-Bold.ttf'),
    'Baloo-ExtraBold': require('./src/Assets/Fonts/Baloo-ExtraBold.ttf'),
    'Baloo-Light': require('./src/Assets/Fonts/Baloo-Light.ttf'),
    'Baloo-Regular': require('./src/Assets/Fonts/Baloo-Regular.ttf'),
    'Baloo-SemiBold': require('./src/Assets/Fonts/Baloo-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
