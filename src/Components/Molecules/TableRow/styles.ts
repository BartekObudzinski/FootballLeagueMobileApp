import { Pressable } from 'react-native';
import theme from 'Setup/theme';
import styled, { css } from 'styled-components/native';
import { StyledContainerProps } from './types';

export const Container = styled(Pressable)<StyledContainerProps>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 5;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.DARK_GREEN_OPACITY};
  border-left-width: 1;
      border-left-color: ${theme.colors.DARK_GREEN_OPACITY}
      border-right-width: 1;
      border-right-color: ${theme.colors.DARK_GREEN_OPACITY}
  ${({ isHeaderRow }) =>
    isHeaderRow &&
    css`
      background-color: ${theme.colors.SECONDARY};
      padding-vertical: 0;
      border-top-left-radius: 10;
      border-top-right-radius: 10;
      border-left-width: 1;
      border-left-color: ${theme.colors.SECONDARY}
      border-right-width: 1;
      border-right-color: ${theme.colors.SECONDARY}
    `};
  ${({ isLastElement }) =>
    isLastElement &&
    css`
      border-left-width: 1;
      border-left-color: ${theme.colors.DARK_GREEN_OPACITY}
      border-right-width: 1;
      border-right-color: ${theme.colors.DARK_GREEN_OPACITY}
      border-bottom-left-radius: 10;
      border-bottom-right-radius: 10;
    `}
`;
