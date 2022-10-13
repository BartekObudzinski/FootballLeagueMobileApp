import { Typography } from 'Components/Atoms/Typography';
import { View } from 'react-native';
import theme from 'Setup/theme';
import styled from 'styled-components/native';

export const Container = styled(View)`
  height: 35;
  border-radius: 5;
  background-color: ${theme.colors.SECONDARY};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-horizontal: 10;
`;

export const StyledTypography = styled(Typography)`
  color: ${theme.colors.WHITE};
`;
