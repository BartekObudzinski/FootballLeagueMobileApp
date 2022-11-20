import { useNavigation } from '@react-navigation/core';
import { Typography } from 'Components/Atoms/Typography';
import { MatchTeamName } from 'Components/Molecules/MatchTeamName';
import { MATCH_DETAILS_SCREEN } from 'Navigation/MatchDetailsScreen/consts';
import React from 'react';
import { DetailsContainer, PressableContainer } from './styles';

export const Match = (props: {
  date: string;
  guest: string;
  host: string;
  id: string;
  time: string;
}) => {
  const showResult = false;
  const { navigate } = useNavigation<any>();
  return (
    <PressableContainer
      onPress={() =>
        navigate(MATCH_DETAILS_SCREEN, {
          id: props.id,
        })
      }
    >
      <MatchTeamName teamName={props.host} />
      <DetailsContainer>
        {showResult ? (
          <Typography size="medium">{`1 : 0`}</Typography>
        ) : (
          <>
            <Typography size="medium">{props.time}</Typography>
            <Typography style={{ marginTop: -15 }}>{props.date}</Typography>
          </>
        )}
      </DetailsContainer>
      <MatchTeamName teamName={props.guest} />
    </PressableContainer>
  );
};
