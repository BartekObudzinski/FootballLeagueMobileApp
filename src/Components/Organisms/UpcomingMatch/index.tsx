import React from 'react';
import { SHADOW_DISTANCE } from './contsts';
import {
  Container,
  DetailsContainer,
  MatchContainer,
  ShadowContainer,
  StyledTypography,
} from './styles';

export const UpcomingMatch = () => {
  return (
    <Container>
      <MatchContainer>
        <StyledTypography>Team 1</StyledTypography>
        <StyledTypography size="medium" marginTop>
          VS
        </StyledTypography>

        <StyledTypography>Team 2</StyledTypography>
      </MatchContainer>
      <DetailsContainer>
        <StyledTypography marginBottom size="large">
          19:30
        </StyledTypography>
        <StyledTypography>10.10.2022</StyledTypography>
      </DetailsContainer>
    </Container>
  );
};
