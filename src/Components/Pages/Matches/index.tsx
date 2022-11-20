import { DataIndicator } from 'Components/Atoms/DataIndicator';
import { Typography } from 'Components/Atoms/Typography';
import { Match } from 'Components/Organisms/Match';
import { WeeksList } from 'Components/Organisms/WeeksList';
import { WeekData } from 'Components/Pages/WeekFormScreen';
import { DocumentData, where } from 'firebase/firestore';
import { useFirestore } from 'Hooks/useFirestore';
import { FirestoreCollections } from 'Hooks/useFirestore/consts';
import { useScreen } from 'Hooks/useScreen';
import React, { useState } from 'react';
import { Container, ScrollContainer } from './styles';

export const Matches = () => {
  const [matches, setMatches] = useState<DocumentData[]>([]);
  const [currentWeek, setCurrentWeek] = useState<WeekData>({
    id: '453-343-111',
    label: 'undefined',
  });

  const { useScreenEffect } = useScreen();
  const { fetchCollection, isLoading } = useFirestore();
  useScreenEffect(() => {
    const fetchMatch = async () => {
      const documents = await fetchCollection(
        FirestoreCollections.MATCHES,
        where('week', '==', currentWeek.label),
      );
      setMatches(documents);
    };

    fetchMatch();
  }, [currentWeek]);

  return (
    <Container>
      <WeeksList setCurrentWeek={setCurrentWeek} />
      <DataIndicator isData={matches.length > 0} isLoading={isLoading}>
        <Typography style={{ marginLeft: 10 }}>{currentWeek.label}</Typography>

        <ScrollContainer showsVerticalScrollIndicator={false}>
          {matches.map((match) => (
            <Match
              date={match.date}
              guest={match.guest}
              host={match.host}
              key={match.id}
              id={match.id}
              time={match.time}
            />
          ))}
        </ScrollContainer>
      </DataIndicator>
    </Container>
  );
};
