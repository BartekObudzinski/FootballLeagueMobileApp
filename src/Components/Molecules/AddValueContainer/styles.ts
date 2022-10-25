import { Entypo } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import theme from 'Setup/theme';
import styled from 'styled-components/native';

export const Container = styled(Pressable)`
  width: 100%;
  align-items: center;
  padding-vertical: 10px;
  background-color: ${theme.colors.WHITE};
  flex-direction: row;
  margin-vertical: 5px;
`;

export const PlusIcon = styled(Entypo)`
  margin-left: 10px;
`;
