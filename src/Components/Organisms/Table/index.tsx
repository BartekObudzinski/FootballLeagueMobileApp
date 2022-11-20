import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { dataHeader, dataTeams } from 'Utils/mocked-data';
import { TableRow } from 'Components/Molecules/TableRow';
import { useFirestore } from 'Hooks/useFirestore';
import { FirestoreCollections } from 'Hooks/useFirestore/consts';
import { TableData } from 'Components/Molecules/TableRow/types';
import { useScreen } from 'Hooks/useScreen';

export const Table = () => {
  const [teams, setTeams] = useState<TableData[]>([]);
  const { fetchCollection } = useFirestore();
  const { useScreenEffect } = useScreen();
  useScreenEffect(() => {
    const fetchTeam = async () => {
      const documents = await fetchCollection(FirestoreCollections.TEAMS);
      setTeams(
        documents.map((d, i) => ({
          standing: (i + 1).toString(),
          name: d.name,
          matches: d.matches,
          balance: `${d.goalScore}:${d.goalLost}`,
          points: d.points,
        })),
      );
    };
    fetchTeam();
  }, []);
  return (
    <Container>
      <TableRow data={dataHeader} isHeaderRow />
      {teams.map((dataTeam, index) => (
        <TableRow
          key={dataTeam.name}
          data={dataTeam}
          isLastElement={index === dataTeams.length - 1}
        />
      ))}
    </Container>
  );
};
