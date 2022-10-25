import theme from 'Setup/theme';
import { RootStackScreenGenerator } from '../../types';
import { TEAM_FORM_SCREEN } from 'Components/Pages/TeamFormScreen/consts';
import { TeamFormScreen } from 'Components/Pages/TeamFormScreen';

export const TeamFormStackScreen: RootStackScreenGenerator = (Stack) => {
  return (
    <Stack.Screen
      options={{
        contentStyle: { backgroundColor: theme.colors.WHITE },
        headerTitle: 'Dodaj Drużynę',
        headerShadowVisible: false,
      }}
      name={TEAM_FORM_SCREEN}
      component={TeamFormScreen}
    />
  );
};
