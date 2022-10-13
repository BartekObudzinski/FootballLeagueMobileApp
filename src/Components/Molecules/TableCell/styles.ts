import { Typography } from 'Components/Atoms/Typography';
import { View } from 'react-native';
import theme from 'Setup/theme';
import styled, { css } from 'styled-components/native';
import { StyledCellContainerProps } from './types';

export const CellContainer = styled(View)<StyledCellContainerProps>`
  width: 40px;
  align-items: center;
  ${({ long }) =>
    long &&
    css`
      flex: 1;
      align-items: flex-start;
    `}
`;

export const CellTypography = styled(Typography)<{ isHeaderRow?: boolean }>`
  ${({ isHeaderRow }) =>
    isHeaderRow &&
    css`
      color: ${theme.colors.WHITE};
    `}
`;
