import { Typography } from 'Components/Atoms/Typography';
import { BestTeams } from 'Components/Organisms/BestTeams';
import { UpcomingMatch } from 'Components/Organisms/UpcomingMatch';
import React from 'react';
import { Container } from './styles';

export const Homepage = () => {
  return (
    <Container>
      <Typography>Nadchodzące spotaknie</Typography>
      <UpcomingMatch />
      <BestTeams />
    </Container>
  );
};
