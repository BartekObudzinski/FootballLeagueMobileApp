import React from 'react';
import { CellContainer, Container } from './styles';
import { TableRowProps } from './types';
import { Typography } from 'Components/Atoms/Typography';
import { View } from 'react-native';
import { TypographyProps } from 'Components/Atoms/Typography/types';

export const TableRow: React.FC<TableRowProps> = ({ data, isHeaderRow }) => {
  const { balance, standing, points, name, matches } = data;

  return (
    <Container isHeaderRow={isHeaderRow}>
      <CellContainer>
        <Typography>{standing}</Typography>
      </CellContainer>
      <CellContainer long>
        <Typography>{name}</Typography>
      </CellContainer>
      <CellContainer>
        <Typography>{matches}</Typography>
      </CellContainer>
      <CellContainer>
        <Typography>{balance}</Typography>
      </CellContainer>
      <CellContainer>
        <Typography>{points}</Typography>
      </CellContainer>
    </Container>
  );
};
