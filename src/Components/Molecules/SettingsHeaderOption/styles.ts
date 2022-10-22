import { Typography } from 'Components/Atoms/Typography';
import { View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  padding-horizontal: 10;
  flex-direction: row;
  align-items: center;
  border: 1px #00000022 solid;
  padding-vertical: 5;
  justify-content: space-between;
`;

export const TitleContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledTypography = styled(Typography)`
  margin-left: 5px;
`;
