import { RootStackNavigator } from './consts';
import { TABS_BOTTOM_MENU } from 'Navigation/TabsBottomMenu/consts';
import { TabsBottomMenuStack } from 'Navigation/TabsBottomMenu';

export const RootStack = () => {
  return (
    <RootStackNavigator.Navigator>
      <RootStackNavigator.Screen
        options={{ headerShown: false }}
        name={TABS_BOTTOM_MENU}
        component={TabsBottomMenuStack}
      />
    </RootStackNavigator.Navigator>
  );
};
