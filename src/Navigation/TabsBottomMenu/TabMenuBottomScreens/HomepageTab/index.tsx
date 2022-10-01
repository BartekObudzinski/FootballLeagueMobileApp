import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../../../Components/Atoms/Typography';
import { Homepage } from '../../../../Components/Pages/Homepage';
import { HOMEPAGE_SCREEN } from '../../../../Components/Pages/Homepage/consts';
import { TAB_ICON_SIZE } from '../../consts';
import { TabBottomMenuType } from '../../types';

export const HomepageTab: TabBottomMenuType = (Tab) => {
  return (
    <Tab.Screen
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <View
            style={{
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Entypo
              name="home"
              size={TAB_ICON_SIZE}
              color="black"
              style={{ padding: 0, margin: 0 }}
            />
            <Typography variant="small">Home</Typography>
          </View>
        ),
      }}
      name={HOMEPAGE_SCREEN}
      component={Homepage}
    />
  );
};
