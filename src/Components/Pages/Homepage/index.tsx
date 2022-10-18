import { Typography } from 'Components/Atoms/Typography';
import { BestTeams } from 'Components/Organisms/BestTeams';
import { UpcomingMatch } from 'Components/Organisms/UpcomingMatch';
import React from 'react';
import { Container } from './styles';

export const Homepage = () => {
  return (
    <Container>
      <Typography size="small">Nadchodzące spotaknie</Typography>
      <UpcomingMatch />
      <Typography size="small">TOP 3</Typography>

      <BestTeams />
    </Container>
  );
};
