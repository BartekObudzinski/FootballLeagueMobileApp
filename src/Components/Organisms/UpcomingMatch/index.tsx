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
    <ShadowContainer stretch distance={SHADOW_DISTANCE}>
      <Container>
        <MatchContainer>
          <StyledTypography size="small">Team 1</StyledTypography>
          <StyledTypography size="medium" marginTop>
            VS
          </StyledTypography>

          <StyledTypography size="small">Team 2</StyledTypography>
        </MatchContainer>
        <DetailsContainer>
          <StyledTypography marginBottom size="large">
            19:30
          </StyledTypography>
          <StyledTypography size="small">10.10.2022</StyledTypography>
        </DetailsContainer>
      </Container>
    </ShadowContainer>
  );
};
