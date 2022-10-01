import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Typography } from '../../Components/Atoms/Typography';
import theme from '../../Setup/theme';
import { Tab, TAB_ICON_SIZE } from './consts';
import { styles } from './styles';
import { HomepageTab } from './TabMenuBottomScreens/HomepageTab';
import { MatchesTab } from './TabMenuBottomScreens/MatchesTab';
import { TablesTab } from './TabMenuBottomScreens/TablesTab';
import { iconProperties } from './TabMenuBottomScreens/Utils/icon-properties';
export const TabsBottomMenuStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const { name, label } = iconProperties(route.name);
        const { LIGHT_GREEN, BLACK } = theme.colors;
        return {
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name={name}
                size={TAB_ICON_SIZE}
                color={focused ? LIGHT_GREEN : BLACK}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Typography
                variant="small"
                style={[
                  styles.tabBarLabel,
                  { color: focused ? LIGHT_GREEN : BLACK },
                ]}
              >
                {label}
              </Typography>
            );
          },
          tabBarStyle: styles.tabBarStyle,
        };
      }}
    >
      {HomepageTab(Tab)}
      {MatchesTab(Tab)}
      {TablesTab(Tab)}
    </Tab.Navigator>
  );
};
