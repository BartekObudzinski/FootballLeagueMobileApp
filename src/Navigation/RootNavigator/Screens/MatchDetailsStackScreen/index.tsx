import { MatchDetails } from 'Components/Pages/MachDetails';
import { MATCH_DETAILS_SCREEN } from 'Navigation/MatchDetailsScreen/consts';
import theme from 'Setup/theme';
import { RootStackScreenGenerator } from '../../types';

export const MatchDetailsStackScreen: RootStackScreenGenerator = (Stack) => {
  return (
    <Stack.Screen
      options={{
        contentStyle: { backgroundColor: theme.colors.WHITE },
        headerShadowVisible: false,
        headerTitle: 'Kolejka 1', // TODO: Function that return current week in header navigation
      }}
      name={MATCH_DETAILS_SCREEN}
      component={MatchDetails}
    />
  );
};
