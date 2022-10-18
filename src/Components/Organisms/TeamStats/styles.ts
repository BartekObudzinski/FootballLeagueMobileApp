import { View } from 'react-native';
import theme from 'Setup/theme';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  background-color: ${theme.colors.WHITE};
  padding: 10px;
`;
