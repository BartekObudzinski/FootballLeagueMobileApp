import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../Atoms/Typography/styles';
import { Container } from './styles';
import { TableCellProps } from './types';

export const TableCell: React.FC<TableCellProps> = ({ data }) => {
  const { balance, standing, points, name, matches } = data;
  return (
    <Container>
      <View style={{ paddingHorizontal: 10 }}>
        <Typography>{standing}</Typography>
      </View>
      <View style={{ flex: 1 }}>
        <Typography>{name}</Typography>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Typography>{matches}</Typography>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Typography>{balance}</Typography>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Typography>{points}</Typography>
      </View>
    </Container>
  );
};
