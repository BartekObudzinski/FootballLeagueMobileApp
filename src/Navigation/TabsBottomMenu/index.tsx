import React from 'react';
import theme from 'Setup/theme';
import { Admin } from 'Components/Pages/Admin';
import { ADMIN_SCREEN } from 'Components/Pages/Admin/consts';
import { Entypo } from '@expo/vector-icons';
import { Homepage } from 'Components/Pages/Homepage';
import { HOMEPAGE_SCREEN } from 'Components/Pages/Homepage/consts';
import { iconProperties } from './Utils/icon-properties';
import { Matches } from 'Components/Pages/Matches';
import { MATCHES_SCREEN } from 'Components/Pages/Matches/consts';
import { styles } from './styles';
import { Tab, TAB_ICON_SIZE } from './consts';
import { Tables } from 'Components/Pages/Tables';
import { TABLES_SCREEN } from 'Components/Pages/Tables/consts';
import { Typography } from 'Components/Atoms/Typography';

export const TabsBottomMenuStack = () => {
  return (
    <Tab.Navigator
      /** Move screen options to constant */
      screenOptions={({ route }) => {
        const { name, label } = iconProperties(route.name);
        const { LIGHT_GREEN, BLACK } = theme.colors;
        return {
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
                size="small"
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
      <Tab.Screen name={HOMEPAGE_SCREEN} component={Homepage} />
      <Tab.Screen name={MATCHES_SCREEN} component={Matches} />
      <Tab.Screen name={TABLES_SCREEN} component={Tables} />
      <Tab.Screen name={ADMIN_SCREEN} component={Admin} />
    </Tab.Navigator>
  );
};
