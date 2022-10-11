import { Typography } from 'Components/Atoms/Typography';
import { View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import theme from 'Setup/theme';
import styled, { css } from 'styled-components/native';
import { StyledTypographyProps } from './types';

const CONTAINER_BORDER_RADIUS = 10;

export const Container = styled(View)`
  height: 180px;
  width: 100%;
  border-radius: ${CONTAINER_BORDER_RADIUS};
  background-color: ${theme.colors.SECONDARY};
  padding-horizontal: 15%;
  padding-vertical: 8%;
`;

export const ShadowContainer = styled(Shadow)`
  border-radius: ${CONTAINER_BORDER_RADIUS};
`;

export const DetailsContainer = styled(View)`
  flex: 1;
  align-items: center;
`;

export const MatchContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledTypography = styled(Typography)<StyledTypographyProps>`
  color: ${theme.colors.WHITE};

  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: -25;
    `}

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: -20;
    `}
`;
