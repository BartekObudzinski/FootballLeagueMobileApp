import { Typography } from 'Components/Atoms/Typography/styles';
import { UpcomingMatch } from 'Components/Organisms/UpcomingMatch';
import React from 'react';
import { Container } from './styles';

export const Homepage = () => {
  return (
    <Container>
      <Typography>Nadchodzące spotaknie</Typography>
      <UpcomingMatch />
    </Container>
  );
};
