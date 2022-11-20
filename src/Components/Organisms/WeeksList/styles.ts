import { FlatList, TouchableOpacity } from 'react-native';
import theme from 'Setup/theme';
import styled from 'styled-components/native';

export const WeekContainer = styled(TouchableOpacity)`
  margin-right: 10px;
  margin-top: 15px;
  margin-bottom: 5px;
  background-color: ${theme.colors.SECONDARY};
  border-radius: 10px;
  padding-horizontal: 15;
  padding-vertical: 15
  align-items: center;
  justify-content: center;
`;

export const WeeksList = styled(FlatList)`
  margin-right: 10px;
`;
