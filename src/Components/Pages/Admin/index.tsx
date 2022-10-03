import React from 'react';
import { View } from 'react-native';
import { AddValueContainer } from '../../Molecules/AddValueContainer';

export const Admin = () => {
  return (
    <View>
      <AddValueContainer text="Dodaj Drużynę" />
      <AddValueContainer text="Dodaj Kolejkę" />
      <AddValueContainer text="Dodaj Spotkanie" />
    </View>
  );
};
