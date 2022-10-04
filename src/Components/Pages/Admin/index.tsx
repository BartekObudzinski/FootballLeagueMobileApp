import React from 'react';
import { AddValueContainer } from 'Components/Molecules/AddValueContainer';
import { View } from 'react-native';

export const Admin = () => {
  return (
    <View>
      <AddValueContainer text="Dodaj Drużynę" />
      <AddValueContainer text="Dodaj Kolejkę" />
      <AddValueContainer text="Dodaj Spotkanie" />
    </View>
  );
};
