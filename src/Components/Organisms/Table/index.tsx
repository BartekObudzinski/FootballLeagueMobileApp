import React from 'react';
import theme from 'Setup/theme';
import { dataHeader, dataTeams } from 'Utils/mocked-data';
import { TableCell } from 'Components/Molecules/TableCell';
import { View } from 'react-native';

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
