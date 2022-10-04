import React from 'react';
import { Container } from './styles';
import { MatchTeamNameProps } from './types';
import { Typography } from 'Components/Atoms/Typography';

export const MatchTeamName: React.FC<MatchTeamNameProps> = ({ teamName }) => {
  return (
    <Container>
      <Typography>{teamName}</Typography>
    </Container>
  );
};
