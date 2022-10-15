import { PodiumBar } from 'Components/Molecules/PodiumBar';
import React from 'react';
import { dataTeams } from 'Utils/mocked-data';
import { Container } from './styles';

export const BestTeams = () => {
  // TODO: ALARM NEED TO BE CHANGED IMIDIENTLIY (CZY JAK TO SIE PISZE)

  return (
    <Container>
      <PodiumBar
        position={dataTeams[1].standing}
        teamLabel={dataTeams[1].name}
      />
      <PodiumBar
        position={dataTeams[0].standing}
        teamLabel={dataTeams[0].name}
      />

      <PodiumBar
        position={dataTeams[2].standing}
        teamLabel={dataTeams[2].name}
      />
    </Container>
  );
};
