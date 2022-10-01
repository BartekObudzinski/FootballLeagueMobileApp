import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Tables } from '../../../../Components/Pages/Tables';
import { TABLES_SCREEN } from '../../../../Components/Pages/Tables/consts';
import { TAB_ICON_SIZE } from '../../consts';
import { TabBottomMenuType } from '../../types';

export const TablesTab: TabBottomMenuType = (Tab) => {
  return (
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <Entypo name="trophy" size={TAB_ICON_SIZE} color="black" />
        ),
      }}
      name={TABLES_SCREEN}
      component={Tables}
    />
  );
};
