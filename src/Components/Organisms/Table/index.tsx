import React from 'react';
import { Container } from './styles';
import { dataHeader, dataTeams } from 'Utils/mocked-data';
import { TableRow } from 'Components/Molecules/TableRow';

export const Table = () => {
  return (
    <Container>
      <TableRow data={dataHeader} isHeaderRow />
      {dataTeams.map((dataTeam, index) => (
        <TableRow
          key={dataTeam.name}
          data={dataTeam}
          isLastElement={index === dataTeams.length - 1}
        />
      ))}
    </Container>
  );
};
