import React from 'react';
import { View } from 'react-native';
import { Match } from '../../Organisms/Match';
import { WeeksList } from '../../Organisms/WeeksList';

export const Matches = () => {
  return (
    <View>
      <WeeksList />
      <View
        style={{
          padding: 10,
        }}
      >
        <Match />
        <Match />
        <Match />

        <Match />

        <Match />
      </View>
    </View>
  );
};
