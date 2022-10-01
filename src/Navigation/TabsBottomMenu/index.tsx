import React from 'react';
import { Tab } from './consts';
import { HomepageTab } from './TabMenuBottomScreens/HomepageTab';
import { MatchesTab } from './TabMenuBottomScreens/MatchesTab';
import { TablesTab } from './TabMenuBottomScreens/TablesTab';

export const TabsBottomMenuStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { position: 'absolute', height: 60 },
        tabBarIconStyle: { backgroundColor: 'red' },
        tabBarLabelStyle: { backgroundColor: 'red' },
        tabBarBadgeStyle: { backgroundColor: 'red' },
        headerLeftContainerStyle: { backgroundColor: 'yellow' },
        headerRightContainerStyle: { backgroundColor: 'pink' },
        headerTitleContainerStyle: { backgroundColor: 'green' },
        headerBackgroundContainerStyle: { backgroundColor: 'purple' },
        headerTitleStyle: { backgroundColor: 'grey' },
        tabBarItemStyle: { backgroundColor: 'orange' },
      }}
    >
      {HomepageTab(Tab)}
      {MatchesTab(Tab)}
      {TablesTab(Tab)}
    </Tab.Navigator>
  );
};
