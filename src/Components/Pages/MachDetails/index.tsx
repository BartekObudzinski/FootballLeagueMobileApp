import { Typography } from 'Components/Atoms/Typography/styles';
import { MatchActionDetail } from 'Components/Molecules/MatchActionDetail';
import { MatchHalfBar } from 'Components/Molecules/MatchHalfBar';
import { UpcomingMatch } from 'Components/Organisms/UpcomingMatch';
import { useScreenRoute } from 'Navigation/RootNavigator/consts';
import React, { useState } from 'react';
import { View } from 'react-native';
import { MATCH_DETAILS_SCREEN } from 'Navigation/MatchDetailsScreen/consts';
import { MatchData } from 'Components/Pages/MatchFormScreen/types';
import { documentId, where } from 'firebase/firestore';
import { FirestoreCollections } from 'Hooks/useFirestore/consts';
import { db } from 'Setup/config';
import { useScreen } from 'Hooks/useScreen';
import { useFirestore } from 'Hooks/useFirestore';
import { DataIndicator } from 'Components/Atoms/DataIndicator';

export const MatchDetails = () => {
  const [match, setMatch] = useState<MatchData>({
    guest: 'Team 1',
    date: '10-10-2010',
    host: 'Team 2',
    id: '123-123-123-123',
    time: '21:30',
    week: 'Week 1',
  });
  const { params } = useScreenRoute<typeof MATCH_DETAILS_SCREEN>();

  const { useScreenEffect } = useScreen();
  const { fetchCollection, isLoading } = useFirestore();

  useScreenEffect(() => {
    const fetchWeeks = async () => {
      const document = await fetchCollection(
        FirestoreCollections.MATCHES,
        where(documentId(), '==', params.id),
      );
      setMatch(document[0] as MatchData);
    };
    fetchWeeks();
  }, [params.id]);
  return (
    <DataIndicator isData={!!match} isLoading={isLoading}>
      <View style={{ padding: 10 }}>
        <UpcomingMatch match={match} />
        <Typography>Podsumowanie</Typography>
        <MatchHalfBar />
        <MatchActionDetail />
        <MatchHalfBar isSecondHalf />

        <MatchActionDetail isGuest />
        <MatchActionDetail />
      </View>
    </DataIndicator>
  );
};
