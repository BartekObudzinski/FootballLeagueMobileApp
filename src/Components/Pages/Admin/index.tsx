import { useNavigation } from '@react-navigation/native';
import { AddValueContainer } from 'Components/Molecules/AddValueContainer';
import React from 'react';
import { MATCH_FROM_SCREEN } from '../MatchFormScreen/consts';
import { RESULT_FORM_SCREEN } from '../ResultFormScreen/consts';
import { TEAM_FORM_SCREEN } from '../TeamFormScreen/consts';
import { WEEK_FORM_SCREEN } from '../WeekFormScreen/consts';
import { Container } from './styles';

export const Admin = () => {
  const { navigate } = useNavigation<any>();
  return (
    <Container>
      <AddValueContainer
        onPress={() => navigate(TEAM_FORM_SCREEN)}
        text="Dodaj Drużynę"
      />
      <AddValueContainer
        onPress={() => navigate(WEEK_FORM_SCREEN)}
        text="Dodaj Kolejkę"
      />
      <AddValueContainer
        onPress={() => navigate(MATCH_FROM_SCREEN)}
        text="Dodaj Spotkanie"
      />
      <AddValueContainer
        onPress={() => navigate(RESULT_FORM_SCREEN)}
        text="Dodaj Wynik"
      />
    </Container>
  );
};
