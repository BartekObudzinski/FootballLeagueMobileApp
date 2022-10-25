import theme from 'Setup/theme';
import { MATCH_FROM_SCREEN } from 'Components/Pages/MatchFormScreen/consts';
import { MatchFormScreen } from 'Components/Pages/MatchFormScreen';
import { RootStackScreenGenerator } from '../../types';

export const MatchFormStackScreen: RootStackScreenGenerator = (Stack) => {
  return (
    <Stack.Screen
      options={{
        contentStyle: { backgroundColor: theme.colors.WHITE },
        headerTitle: 'Dodaj Spotkanie',
        headerShadowVisible: false,
      }}
      name={MATCH_FROM_SCREEN}
      component={MatchFormScreen}
    />
  );
};
