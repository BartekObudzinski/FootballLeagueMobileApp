import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Typography } from 'Components/Atoms/Typography';
import { Admin } from 'Components/Pages/Admin';
import { ADMIN_SCREEN } from 'Components/Pages/Admin/consts';
import { Homepage } from 'Components/Pages/Homepage';
import { HOMEPAGE_SCREEN } from 'Components/Pages/Homepage/consts';
import { Matches } from 'Components/Pages/Matches';
import { MATCHES_SCREEN } from 'Components/Pages/Matches/consts';
import { SETTINGS_SCREEN } from 'Components/Pages/SettingsScreen/consts';
import { Tables } from 'Components/Pages/Tables';
import { TABLES_SCREEN } from 'Components/Pages/Tables/consts';
import React from 'react';
import theme from 'Setup/theme';
import { Tab, TAB_ICON_SIZE } from './consts';
import { styles } from './styles';
import { headerLabel } from './Utils/header-label';
import { iconProperties } from './Utils/icon-properties';

export const TabsBottomMenuStack = () => {
  const isUserAuth = false;
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: theme.colors.WHITE }}
      /** Move screen options to constant */
      screenOptions={({ route }) => {
        const { name, label } = iconProperties(route.name);
        const { PRIMARY, BLACK } = theme.colors;
        const { navigate } = useNavigation<any>();
        const xd = () => {
          navigate(SETTINGS_SCREEN);
        };
        return {
          headerShadowVisible: false,
          headerTitle: () => (
            <Typography size="medium" bold>
              {headerLabel(route.name)}
            </Typography>
          ),
          headerRight: () => {
            return (
              <Entypo
                name="cog"
                onPress={xd}
                size={30}
                style={{ marginRight: 10 }}
              />
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name={name}
                size={TAB_ICON_SIZE}
                color={focused ? PRIMARY : BLACK}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <Typography
                style={[
                  styles.tabBarLabel,
                  { color: focused ? PRIMARY : BLACK, fontSize: 15 }, // TODO: Delete hardcoded value
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
