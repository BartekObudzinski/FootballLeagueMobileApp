import { Typography } from 'Components/Atoms/Typography';
import { View } from 'react-native';
import theme from 'Setup/theme';
import styled from 'styled-components';

export const Container = styled(View)`
  width: 30%;
`;

export const StyledTypography = styled(Typography)`
  align-self: center;
  text-align: center;
  font-family: ${theme.fontFamily.bold};
  font-size: ${theme.fontSize.little};
`;

export const PositionTypography = styled(Typography)`
  color: ${theme.colors.WHITE};
`;

export const PositionContainer = styled(View)`
  border-radius: 10;
  align-items: center;
  justify-content: center;
`;
