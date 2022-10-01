import React from 'react';
import { Matches } from '../../../../Components/Pages/Matches';
import { MATCHES_SCREEN } from '../../../../Components/Pages/Matches/consts';
import { TabBottomMenuType } from '../../types';

export const MatchesTab: TabBottomMenuType = (Tab) => {
  return <Tab.Screen name={MATCHES_SCREEN} component={Matches} />;
};
