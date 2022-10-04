import styled, { css } from 'styled-components/native';
import { StyledContainerProps } from './types';
import { View } from 'react-native';

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
