import React from 'react';
import { TableCell } from '../TableCell';
import { Container } from './styles';
import { TableRowProps } from './types';

export const TableRow: React.FC<TableRowProps> = ({ data, isHeaderRow }) => {
  const { balance, standing, points, name, matches } = data;
  const standingValue = isHeaderRow ? standing : `${standing}.`;
  return (
    <Container isHeaderRow={isHeaderRow}>
      <TableCell value={standingValue} isHeaderRow={isHeaderRow} />
      <TableCell long value={name} isHeaderRow={isHeaderRow} />
      <TableCell value={matches} isHeaderRow={isHeaderRow} />
      <TableCell value={balance} isHeaderRow={isHeaderRow} />
      <TableCell value={points} isHeaderRow={isHeaderRow} />
    </Container>
  );
};
