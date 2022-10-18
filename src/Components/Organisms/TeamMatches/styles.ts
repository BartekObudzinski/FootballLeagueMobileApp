import { ScrollView, View } from 'react-native';
import theme from 'Setup/theme';
import styled from 'styled-components';

export const ScrollContainer = styled(ScrollView)`
  flex: 1;
  background-color: ${theme.colors.WHITE};
`;

export const Container = styled(View)`
  padding: 10px;
`;
