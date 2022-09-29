import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { TmpComponent } from '../../Views/tmp';
import { TmpComponentxd } from '../../Views/tmpcopy';
import { Tab } from './consts';

export const TabsBottomMenuStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5 name="smoking" size={24} color="black" />
          ),
        }}
        name="TmpScreen"
        component={TmpComponent}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <Entypo name="drink" size={24} color="black" />,
        }}
        name="TmpScreen2"
        component={TmpComponentxd}
      />
    </Tab.Navigator>
  );
};
