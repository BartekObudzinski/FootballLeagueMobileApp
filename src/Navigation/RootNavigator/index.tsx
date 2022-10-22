import { LoginScreen } from 'Components/Pages/LoginScreen';
import { LOGIN_SCREEN } from 'Components/Pages/LoginScreen/consts';
import { MatchDetails } from 'Components/Pages/MachDetails';
import { SettingsScreen } from 'Components/Pages/SettingsScreen';
import { SETTINGS_SCREEN } from 'Components/Pages/SettingsScreen/consts';
import { TeamDetails } from 'Components/Pages/TeamDetails';
import { MATCH_DETAILS_SCREEN } from 'Navigation/MatchDetailsScreen/consts';
import { TabsBottomMenuStack } from 'Navigation/TabsBottomMenu';
import { TABS_BOTTOM_MENU } from 'Navigation/TabsBottomMenu/consts';
import { TEAM_DETAILS_SCREEN } from 'Navigation/TeamDetailsScreen/consts';
import React from 'react';
import theme from 'Setup/theme';
import { RootStackNavigator } from './consts';

export const RootStack = () => {
  return (
    <RootStackNavigator.Navigator>
      <RootStackNavigator.Screen
        options={{
          headerShown: false,
        }}
        name={TABS_BOTTOM_MENU}
        component={TabsBottomMenuStack}
      />
      <RootStackNavigator.Screen
        options={{
          contentStyle: { backgroundColor: theme.colors.WHITE },
          headerShadowVisible: false,
          headerTitle: 'Kolejka 1', // TODO: Function that return current week in header navigation
        }}
        name={MATCH_DETAILS_SCREEN}
        component={MatchDetails}
      />
      <RootStackNavigator.Screen
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.SECONDARY },
        }}
        name={TEAM_DETAILS_SCREEN}
        component={TeamDetails}
      />

      <RootStackNavigator.Screen
        options={{
          contentStyle: { backgroundColor: theme.colors.WHITE },
          headerTitle: 'Ustawienia',
        }}
        name={SETTINGS_SCREEN}
        component={SettingsScreen}
      />

      <RootStackNavigator.Screen
        options={{
          contentStyle: { backgroundColor: theme.colors.WHITE },
          headerTitle: 'Login',
        }}
        name={LOGIN_SCREEN}
        component={LoginScreen}
      />
    </RootStackNavigator.Navigator>
  );
};
