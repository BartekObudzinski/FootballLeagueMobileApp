import { Ionicons } from '@expo/vector-icons';
import { Typography } from 'Components/Atoms/Typography';
import React from 'react';
import { Container } from './styles';
import { MatchActionDetailProps } from './types';

export const MatchActionDetail: React.FC<MatchActionDetailProps> = ({
  isGuest,
}) => {
  // TODO: ALSO COLUD BE ADD ASIST, YELLOW CARD, OR RED CARD
  return (
    <Container isGuest={isGuest}>
      <Ionicons name="md-football" size={20} color="black" />
      <Typography style={{ marginHorizontal: 5 }}>Kowalczyk Damian</Typography>
    </Container>
  );
};
