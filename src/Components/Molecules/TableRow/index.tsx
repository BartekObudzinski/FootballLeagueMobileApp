import { useNavigation } from '@react-navigation/native';
import { TEAM_DETAILS_SCREEN } from 'Navigation/TeamDetailsScreen/consts';
import React from 'react';
import { TableCell } from '../TableCell';
import { Container } from './styles';
import { TableRowProps } from './types';

export const TableRow: React.FC<TableRowProps> = ({
  data,
  isHeaderRow,
  isLastElement,
}) => {
  const { balance, standing, points, name, matches } = data;
  const standingValue = isHeaderRow ? standing : `${standing}.`;
  const { navigate } = useNavigation<any>();
  const openTeamDetails = () => {
    navigate(TEAM_DETAILS_SCREEN, {
      id: name,
    });
  };
  return (
    <Container
      onPress={openTeamDetails}
      isHeaderRow={isHeaderRow}
      isLastElement={isLastElement}
    >
      <TableCell value={standingValue} isHeaderRow={isHeaderRow} />
      <TableCell long value={name} isHeaderRow={isHeaderRow} />
      <TableCell value={matches} isHeaderRow={isHeaderRow} />
      <TableCell value={balance} isHeaderRow={isHeaderRow} />
      <TableCell value={points} isHeaderRow={isHeaderRow} />
    </Container>
  );
};
