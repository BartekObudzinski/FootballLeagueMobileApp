import React from 'react';
import { Container } from './styles';
import { Match } from 'Components/Organisms/Match';
import { Typography } from 'Components/Atoms/Typography';
import { View } from 'react-native';
import { WeeksList } from 'Components/Organisms/WeeksList';

export const Matches = () => {
  return (
    <View>
      <WeeksList />
      <Container>
        <Typography size="large"> Kolejka 1</Typography>
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
      </Container>
    </View>
  );
};
