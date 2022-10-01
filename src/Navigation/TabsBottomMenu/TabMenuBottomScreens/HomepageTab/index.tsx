import React from 'react';
import { Homepage } from '../../../../Components/Pages/Homepage';
import { HOMEPAGE_SCREEN } from '../../../../Components/Pages/Homepage/consts';
import { TabBottomMenuType } from '../../types';

export const HomepageTab: TabBottomMenuType = (Tab) => {
  return <Tab.Screen name={HOMEPAGE_SCREEN} component={Homepage} />;
};
