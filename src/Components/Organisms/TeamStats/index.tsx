import React from 'react';
import { Container } from './styles';
import { DetailFromStatistic } from 'Components/Molecules/DetailFromStatistic';
import { View } from 'react-native';
import { Typography } from 'Components/Atoms/Typography';
import { Fontisto } from '@expo/vector-icons';

export const TeamStats = () => {
  return (
    <Container>
      <DetailFromStatistic description="Rozegrane mecze" value="1" />
      <DetailFromStatistic description="Punkty" value="3" />
      <DetailFromStatistic description="Strzelone gole" value="50" />
      <DetailFromStatistic description="Stracone gole" value="5" />
      <DetailFromStatistic description="Balans goli" value="45" />
      <DetailFromStatistic description="Ilość kartek" value="5" />
      {/** TODO: This should be done this way but im not sure how it will looks */}
      <View style={{ alignItems: 'center' }}>
        <Typography size="small">Najlepszy strzelec</Typography>
        <Fontisto name="person" size={24} color="black" />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography size="small">Damian Kowalczyk</Typography>
          <View
            style={{
              height: 5,
              width: 5,
              borderRadius: 5 / 2,
              backgroundColor: 'black',
              marginHorizontal: 5,
            }}
          />
          <Typography size="small">5 goli</Typography>
        </View>
      </View>
    </Container>
  );
};
