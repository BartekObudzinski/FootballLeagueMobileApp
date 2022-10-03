import React from 'react';
import { Admin } from '../../../../Components/Pages/Admin';
import { ADMIN_SCREEN } from '../../../../Components/Pages/Admin/consts';
import { TabBottomMenuType } from '../../types';

export const AdminTab: TabBottomMenuType = (Tab) => {
  return <Tab.Screen name={ADMIN_SCREEN} component={Admin} />;
};
