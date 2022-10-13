import { MatchDetails } from 'Components/Pages/MachDetails';
import { MATCH_DETAILS_SCREEN } from 'Navigation/MatchDetailsScreen/consts';
import { TabsBottomMenuStack } from 'Navigation/TabsBottomMenu';
import { TABS_BOTTOM_MENU } from 'Navigation/TabsBottomMenu/consts';
import React from 'react';
import { RootStackNavigator } from './consts';

export const RootStack = () => {
  return (
    <RootStackNavigator.Navigator>
      <RootStackNavigator.Screen
        options={{ headerShown: false }}
        name={TABS_BOTTOM_MENU}
        component={TabsBottomMenuStack}
      />
      <RootStackNavigator.Screen
        options={{
          headerTitle: 'Kolejka 1', // TODO: Function that return current week in header navigation
        }}
        name={MATCH_DETAILS_SCREEN}
        component={MatchDetails}
      />
    </RootStackNavigator.Navigator>
  );
};
