import { TabsBottomMenuStack } from '../TabsBottomMenu';
import { TABS_BOTTOM_MENU } from '../TabsBottomMenu/consts';
import { RootStackNavigator } from './consts';

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
