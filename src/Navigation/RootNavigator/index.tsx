import { WEEK_FORM_SCREEN } from 'Components/Pages/WeekFormScreen/consts';
import React from 'react';
import { RootStackNavigator } from './consts';
import { LoginStackScreen } from './Screens/LoginStackScreen';
import { MatchDetailsStackScreen } from './Screens/MatchDetailsStackScreen';
import { MatchFormStackScreen } from './Screens/MatchFormStackScreen';
import { ResultFormStackScreen } from './Screens/ResultFormStackScreen';
import { SeasonFormStackScreen } from './Screens/SeasonFormStackScreen';
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
      {SeasonFormStackScreen(RootStackNavigator)}
    </RootStackNavigator.Navigator>
  );
};
