import { View } from 'react-native';
import styled from 'styled-components/native';
import { StyledContainerProps } from './types';

export const Container = styled(View)<StyledContainerProps>`
  padding-horizontal: 10;
  height: 25;
  margin-vertical: 5;
  align-items: center;
  flex-direction: ${({ isGuest }) => (isGuest ? 'row-reverse' : 'row')};
`;
