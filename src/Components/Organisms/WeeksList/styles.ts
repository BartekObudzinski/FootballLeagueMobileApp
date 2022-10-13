import { FlatList, TouchableOpacity } from 'react-native';
import theme from 'Setup/theme';
import styled from 'styled-components/native';

export const WeekContainer = styled(TouchableOpacity)`
  margin-right: 10;
  margin-top: 15;
  margin-bottom: 5;
  background-color: ${theme.colors.SECONDARY};
  border-radius: 10px;
  padding-horizontal: 15;
  padding-vertical: 5
  align-items: center;
  justify-content: center;
`;

export const WeeksList = styled(FlatList)`
  margin-right: 10px;
`;
