import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Matches } from '../../../../Components/Pages/Matches';
import { MATCHES_SCREEN } from '../../../../Components/Pages/Matches/consts';
import { TAB_ICON_SIZE } from '../../consts';
import { TabBottomMenuType } from '../../types';

export const MatchesTab: TabBottomMenuType = (Tab) => {
  return (
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <Entypo name="calendar" size={TAB_ICON_SIZE} color="black" />
        ),
      }}
      name={MATCHES_SCREEN}
      component={Matches}
    />
  );
};
