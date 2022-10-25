import React from 'react';
import { CellContainer, CellTypography } from './styles';
import { TableCellProps } from './types';

export const TableCell: React.FC<TableCellProps> = ({
  isHeaderRow,
  long,
  value,
}) => {
  return (
    <CellContainer long={long} isHeaderRow={isHeaderRow}>
      <CellTypography isHeaderRow={isHeaderRow}>{value}</CellTypography>
    </CellContainer>
  );
};
