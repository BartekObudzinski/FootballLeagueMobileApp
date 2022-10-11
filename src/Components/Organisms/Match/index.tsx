import React from 'react';
import { DetailsContainer, PressableContainer } from './styles';
import { MatchTeamName } from 'Components/Molecules/MatchTeamName';
import { Typography } from 'Components/Atoms/Typography';
import { useNavigation } from '@react-navigation/core';
import { MATCH_DETAILS_SCREEN } from 'Navigation/MatchDetailsScreen/consts';

export const Match = () => {
  const showResult = false;
  const navigation = useNavigation();
  return (
    <PressableContainer
      onPress={() =>
        navigation.navigate(MATCH_DETAILS_SCREEN, {
          id: '1',
        })
      }
    >
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
