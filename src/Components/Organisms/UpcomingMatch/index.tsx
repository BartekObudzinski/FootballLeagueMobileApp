import React from 'react';
import {
  Container,
  DetailsContainer,
  MatchContainer,
  StyledTypography,
} from './styles';

export const UpcomingMatch = (props: {
  match: {
    date: string;
    guest: string;
    host: string;
    id: string;
    time: string;
    week: string;
  };
}) => {
  return (
    <Container>
      <MatchContainer>
        <StyledTypography>{props.match.host}</StyledTypography>
        <StyledTypography size="medium" marginTop>
          VS
        </StyledTypography>

        <StyledTypography>{props.match.guest}</StyledTypography>
      </MatchContainer>
      <DetailsContainer>
        <StyledTypography marginBottom size="large">
          {props.match.time}
        </StyledTypography>
        <StyledTypography>{props.match.date}</StyledTypography>
      </DetailsContainer>
    </Container>
  );
};
