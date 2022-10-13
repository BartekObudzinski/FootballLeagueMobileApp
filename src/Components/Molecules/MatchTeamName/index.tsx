import { Typography } from 'Components/Atoms/Typography';
import React from 'react';
import { Container } from './styles';
import { MatchTeamNameProps } from './types';

export const MatchTeamName: React.FC<MatchTeamNameProps> = ({ teamName }) => {
  return (
    <Container>
      <Typography size="small">{teamName}</Typography>
    </Container>
  );
};
