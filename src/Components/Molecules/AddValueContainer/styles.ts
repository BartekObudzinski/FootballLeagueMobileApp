import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export const Container = styled(Pressable)`
  width: 100%;
  align-items: center;
  padding-vertical: 10;
  background-color: white;
  flex-direction: row;
  margin-vertical: 5;
`;

export const PlusIcon = styled(Entypo)`
  margin-left: 10;
`;

export const PressMe = styled.Pressable`
  width: 100%;
  align-items: center;
  padding-vertical: 10;
  background-color: white;
  flex-direction: row;
  margin-vertical: 5;
`;
