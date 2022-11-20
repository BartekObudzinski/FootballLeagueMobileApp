import theme from 'Setup/theme';
import { RootStackScreenGenerator } from '../../types';
import { SeasonFormScreen } from 'Components/Pages/SeasonFormScreen';
import { SEASON_FORM_SCREEN } from 'Components/Pages/SeasonFormScreen/consts';

export const SeasonFormStackScreen: RootStackScreenGenerator = (Stack) => {
  return (
    <Stack.Screen
      options={{
        contentStyle: { backgroundColor: theme.colors.WHITE },
        headerTitle: 'Dodaj Sezon',
        headerShadowVisible: false,
      }}
      name={SEASON_FORM_SCREEN}
      component={SeasonFormScreen}
    />
  );
};
