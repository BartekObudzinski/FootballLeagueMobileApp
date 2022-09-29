import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from '../Components/Typography';

export const TmpComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
      <Typography>Com 1</Typography>
    </SafeAreaView>
  );
};
