import React from 'react';
import { View } from 'react-native';
import theme from '../../../Setup/theme';
import { dataHeader, dataTeams } from '../../../Utils/mocked-data';
import { TableCell } from '../../Molecules/TableCell';

export const Table = () => {
  return (
    <View>
      <TableCell data={dataHeader} backgroundColor={theme.colors.LIGHT_GREEN} />
      {dataTeams.map((dataTeam) => (
        <TableCell key={dataTeam.name} data={dataTeam} />
      ))}
    </View>
  );
};
