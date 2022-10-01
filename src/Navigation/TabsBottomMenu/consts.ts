import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBottomMenuParamList } from './types';

export const Tab = createBottomTabNavigator<TabBottomMenuParamList>();

export const TABS_BOTTOM_MENU = 'TabsBottomMenu';

export const TAB_ICON_SIZE = 30;
