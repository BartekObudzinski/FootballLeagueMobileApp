import styled from 'styled-components/native';
import theme from 'Setup/theme';
import { FlatList, TouchableOpacity } from 'react-native';

export const WeekContainer = styled(TouchableOpacity)`
  margin-right: 10;
  margin-top: 15;
  margin-bottom: 5;
  background-color: ${theme.colors.LIGHT_GREEN};
  border-radius: 15px;
  padding-horizontal: 10;
  padding-vertical: 20;
  align-items: center;
`;

export const WeeksList = styled(FlatList)`
  margin-right: 10px;
`;
