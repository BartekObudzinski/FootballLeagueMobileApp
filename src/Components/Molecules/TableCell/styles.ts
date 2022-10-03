import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { StyledContainerProps } from './types';

export const Container = styled(View)<StyledContainerProps>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 5;

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`;
