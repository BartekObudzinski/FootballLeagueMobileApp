import { Typography } from 'Components/Atoms/Typography';
import { View } from 'react-native';
import theme from 'Setup/theme';
import styled from 'styled-components';

export const Container = styled(View)`
  padding-horizontal: 10;
  flex-direction: row;
  align-items: center;
  border: 1px ${theme.colors.DARK_GREEN_OPACITY} solid;
  height: 65px;
  justify-content: space-between;
`;

export const TitleContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledTypography = styled(Typography)`
  margin-left: 5px;
`;
