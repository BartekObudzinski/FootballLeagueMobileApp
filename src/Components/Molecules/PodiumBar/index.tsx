import React from 'react';
import theme from 'Setup/theme';
import {
  Container,
  PositionContainer,
  PositionTypography,
  StyledTypography,
} from './styles';
import { PodiumBarProps } from './types';

export const PodiumBar: React.FC<PodiumBarProps> = ({
  position,
  teamLabel,
}) => {
  //TODO: Workaround
  const positionStyles = () => {
    switch (position) {
      case '1':
        return { height: '80%', backgroundColor: theme.colors.GOLD };
      case '2':
        return { height: '65%', backgroundColor: theme.colors.SILVER };
      case '3':
        return { height: '40%', backgroundColor: theme.colors.BRONZE };
      default:
        return {};
    }
  };
  return (
    <Container>
      <StyledTypography>{teamLabel}</StyledTypography>
      <PositionContainer style={positionStyles()}>
        <PositionTypography size="large">{position}</PositionTypography>
      </PositionContainer>
    </Container>
  );
};
