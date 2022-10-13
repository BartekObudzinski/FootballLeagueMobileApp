import { View } from 'react-native';
import theme from 'Setup/theme';
import styled, { css } from 'styled-components/native';
import { StyledContainerProps } from './types';

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
      background-color: ${theme.colors.SECONDARY};
      padding-vertical: 0;
    `}
`;
