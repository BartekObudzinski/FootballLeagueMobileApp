import styled, { css } from 'styled-components/native';
import { StyledCellContainerProps, StyledContainerProps } from './types';
import { View } from 'react-native';
import theme from 'Setup/theme';
import { Typography } from 'Components/Atoms/Typography';

export const Container = styled(View)<StyledContainerProps>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 5;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.DARK_GREEN_OPACITY};
  ${({ isHeaderRow }) =>
    isHeaderRow &&
    css`
      background-color: ${theme.colors.LIGHT_GREEN};
      padding-vertical: 0;
    `}
`;

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
