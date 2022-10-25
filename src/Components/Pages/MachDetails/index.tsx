import { Typography } from 'Components/Atoms/Typography/styles';
import { MatchActionDetail } from 'Components/Molecules/MatchActionDetail';
import { MatchHalfBar } from 'Components/Molecules/MatchHalfBar';
import { UpcomingMatch } from 'Components/Organisms/UpcomingMatch';
import React from 'react';
import { View } from 'react-native';

export const MatchDetails = () => {
  return (
    <View style={{ padding: 10 }}>
      <UpcomingMatch />
      <Typography>Podsumowanie</Typography>
      <MatchHalfBar />
      <MatchActionDetail />
      <MatchHalfBar isSecondHalf />

      <MatchActionDetail isGuest />
      <MatchActionDetail />
    </View>
  );
};
