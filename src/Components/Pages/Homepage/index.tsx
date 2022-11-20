import React, { useState } from 'react';
import { BestTeams } from 'Components/Organisms/BestTeams';
import { Container } from './styles';
import { Typography } from 'Components/Atoms/Typography';
import { UpcomingMatch } from 'Components/Organisms/UpcomingMatch';
import { limit, orderBy, where } from 'firebase/firestore';
import { FirestoreCollections } from 'Hooks/useFirestore/consts';
import { getDate } from 'Utils/get-date';
import { useScreen } from 'Hooks/useScreen';
import { TeamData } from 'Components/Pages/TeamFormScreen/types';
import { MatchData } from 'Components/Pages/MatchFormScreen/types';
import { useFirestore } from 'Hooks/useFirestore';

export const Homepage = () => {
  const [match, setMatch] = useState<MatchData>({
    guest: 'Team 1',
    date: '10-10-2010',
    host: 'Team 2',
    id: '123-123-123-123',
    time: '21:30',
    week: 'Week 1',
  });
  const [teams, setTeams] = useState<TeamData[]>([]);
  const { useScreenEffect } = useScreen();
  const { fetchCollection } = useFirestore();
  useScreenEffect(() => {
    const fetchMatch = async () => {
      const documents = await fetchCollection(
        FirestoreCollections.MATCHES,
        where('date', '>=', `${getDate(new Date())}`),
        orderBy('date'),
        limit(1),
      );
      setMatch(documents[0] as MatchData);
    };
    const fetchTeams = async () => {
      const documents = await fetchCollection(
        FirestoreCollections.TEAMS,
        orderBy('points', 'desc'),
        limit(3),
      );
      setTeams(documents as TeamData[]);
    };
    fetchTeams();
    fetchMatch();
  }, []);

  return (
    <Container>
      <Typography>Nadchodzące spotaknie</Typography>
      <UpcomingMatch match={match} />
      <BestTeams teams={teams} />
    </Container>
  );
};
