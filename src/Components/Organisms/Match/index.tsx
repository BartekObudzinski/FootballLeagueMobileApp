import { useNavigation } from '@react-navigation/core';
import { Typography } from 'Components/Atoms/Typography';
import { MatchTeamName } from 'Components/Molecules/MatchTeamName';
import { MATCH_DETAILS_SCREEN } from 'Navigation/MatchDetailsScreen/consts';
import React from 'react';
import { Shadow } from 'react-native-shadow-2';
import { DetailsContainer, PressableContainer } from './styles';

export const Match = () => {
  const showResult = false;
  // TODO: Type Navigation or create custom hook
  const { navigate } = useNavigation<any>();
  return (
    <PressableContainer
      onPress={() =>
        navigate(MATCH_DETAILS_SCREEN, {
          id: '1',
        })
      }
    >
      <MatchTeamName teamName="Team 1" />
      <DetailsContainer>
        {showResult ? (
          <Typography size="medium">{`1 : 0`}</Typography>
        ) : (
          <>
            <Typography size="medium">18:30</Typography>
            <Typography style={{ marginTop: -15 }}>30.09</Typography>
          </>
        )}
      </DetailsContainer>
      <MatchTeamName teamName="Team 2" />
    </PressableContainer>
  );
};
