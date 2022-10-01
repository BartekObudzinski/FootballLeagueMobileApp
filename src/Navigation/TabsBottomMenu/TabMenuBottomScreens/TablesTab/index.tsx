import React from 'react';
import { Tables } from '../../../../Components/Pages/Tables';
import { TABLES_SCREEN } from '../../../../Components/Pages/Tables/consts';
import { TabBottomMenuType } from '../../types';

export const TablesTab: TabBottomMenuType = (Tab) => {
  return <Tab.Screen name={TABLES_SCREEN} component={Tables} />;
};
