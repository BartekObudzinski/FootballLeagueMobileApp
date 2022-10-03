import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../../Setup/theme';

export const WeekContainer = styled(TouchableOpacity)`
  margin-horizontal: 5;
  margin-vertical: 15;
  background-color: ${theme.colors.LIGHT_GREEN};
  border-radius: 15px;
  padding-horizontal: 10;
  padding-vertical: 20;
  align-items: center;
`;
