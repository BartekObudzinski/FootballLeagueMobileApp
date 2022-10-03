import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../Atoms/Typography';
import { Match } from '../../Organisms/Match';
import { WeeksList } from '../../Organisms/WeeksList';
import { Container } from './styles';

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
