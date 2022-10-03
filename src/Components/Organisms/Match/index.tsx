import React from 'react';
import { Typography } from '../../Atoms/Typography';
import { MatchTeamName } from '../../Molecules/MatchTeamName';
import { DetailsContainer, PressableContainer } from './styles';

export const Match = () => {
  const showResult = false;

  return (
    <PressableContainer>
      <MatchTeamName teamName="Team 1" />
      <DetailsContainer>
        {showResult ? (
          <Typography size="large">{`1 : 0`}</Typography>
        ) : (
          <>
            <Typography>18:30</Typography>
            <Typography size="small">30.09</Typography>
          </>
        )}
      </DetailsContainer>
      <MatchTeamName teamName="Team 2" />
    </PressableContainer>
  );
};
