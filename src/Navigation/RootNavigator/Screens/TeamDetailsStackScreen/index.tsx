import theme from 'Setup/theme';
import { RootStackScreenGenerator } from '../../types';
import { TeamDetails } from 'Components/Pages/TeamDetails';
import { TEAM_DETAILS_SCREEN } from 'Navigation/TeamDetailsScreen/consts';

export const TeamDetailsStackScreen: RootStackScreenGenerator = (Stack) => {
  return (
    <Stack.Screen
      options={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.SECONDARY },
      }}
      name={TEAM_DETAILS_SCREEN}
      component={TeamDetails}
    />
  );
};
