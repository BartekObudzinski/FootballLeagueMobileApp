import React from 'react';
import { Container, StyledTypography } from './styles';
import { MatchHalfBarProps } from './types';

export const MatchHalfBar: React.FC<MatchHalfBarProps> = ({ isSecondHalf }) => {
  return (
    <Container>
      <StyledTypography>
        {isSecondHalf ? 'Druga połowa' : 'Pierwsza połowa'}
      </StyledTypography>
      <StyledTypography>0 - 0</StyledTypography>
    </Container>
  );
};
