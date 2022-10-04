import React from 'react';
import { Container } from './styles';
import { dataHeader, dataTeams } from 'Utils/mocked-data';
import { TableRow } from 'Components/Molecules/TableRow';

export const Table = () => {
  return (
    <Container>
      <TableRow data={dataHeader} isHeaderRow />
      {dataTeams.map((dataTeam) => (
        <TableRow key={dataTeam.name} data={dataTeam} />
      ))}
    </Container>
  );
};
