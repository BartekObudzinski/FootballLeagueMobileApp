import { Typography } from 'Components/Atoms/Typography';
import { Match } from 'Components/Organisms/Match';
import { WeeksList } from 'Components/Organisms/WeeksList';
import React from 'react';
import { Container, ScrollContainer } from './styles';

export const Matches = () => {
  return (
    <Container>
      <WeeksList />
      <Typography style={{ marginLeft: 10 }}>Kolejka 1</Typography>
      <ScrollContainer showsVerticalScrollIndicator={false}>
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
      </ScrollContainer>
    </Container>
  );
};
