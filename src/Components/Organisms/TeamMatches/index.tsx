import React from 'react';
import { Match } from '../Match';
import { Container, ScrollContainer } from './styles';

export const TeamMatches = () => {
  return (
    <ScrollContainer>
      <Container>
        <Match />
        <Match />

        <Match />

        <Match />
        <Match />
      </Container>
    </ScrollContainer>
  );
};
