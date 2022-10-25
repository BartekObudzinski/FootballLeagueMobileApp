import { LoginScreen } from 'Components/Pages/LoginScreen';
import { LOGIN_SCREEN } from 'Components/Pages/LoginScreen/consts';
import { MatchFormScreen } from 'Components/Pages/MatchFormScreen';
import { MATCH_FROM_SCREEN } from 'Components/Pages/MatchFormScreen/consts';
import { ResultFormScreen } from 'Components/Pages/ResultFormScreen';
import { RESULT_FORM_SCREEN } from 'Components/Pages/ResultFormScreen/consts';
import { SettingsScreen } from 'Components/Pages/SettingsScreen';
import { SETTINGS_SCREEN } from 'Components/Pages/SettingsScreen/consts';
import { TeamFormScreen } from 'Components/Pages/TeamFormScreen';
import { TEAM_FORM_SCREEN } from 'Components/Pages/TeamFormScreen/consts';
import { WeekFormScreen } from 'Components/Pages/WeekFormScreen';
import { WEEK_FORM_SCREEN } from 'Components/Pages/WeekFormScreen/consts';
import React from 'react';
import theme from 'Setup/theme';
import { RootStackNavigator } from './consts';
import { LoginStackScreen } from './Screens/LoginStackScreen';
import { MatchDetailsStackScreen } from './Screens/MatchDetailsStackScreen';
import { MatchFormStackScreen } from './Screens/MatchFormStackScreen';
import { ResultFormStackScreen } from './Screens/ResultFormStackScreen';
import { SettingsStackScreen } from './Screens/SettingsStackScreen';
import { TabsBottomMenuStackScreen } from './Screens/TabsBottomMenuStackScreen';
import { TeamDetailsStackScreen } from './Screens/TeamDetailsStackScreen';
import { TeamFormStackScreen } from './Screens/TeamFormStackScreen';
import { WeekFormStackScreen } from './Screens/WeekFormStackScreen';

export const RootStack = () => {
  return (
    <RootStackNavigator.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: 'red' },
        headerShadowVisible: true,
      }}
    >
      {TabsBottomMenuStackScreen(RootStackNavigator)}
      {MatchDetailsStackScreen(RootStackNavigator)}
      {TeamDetailsStackScreen(RootStackNavigator)}
      {SettingsStackScreen(RootStackNavigator)}
      {LoginStackScreen(RootStackNavigator)}
      {TeamFormStackScreen(RootStackNavigator)}
      {WeekFormStackScreen(RootStackNavigator)}
      {MatchFormStackScreen(RootStackNavigator)}
      {ResultFormStackScreen(RootStackNavigator)}
    </RootStackNavigator.Navigator>
  );
};
