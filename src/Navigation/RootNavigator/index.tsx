import { TabsBottomMenuStack } from '../TabsBottomMenu';
import { RootStackNavigator } from './consts';

export const RootStack = () => {
  return (
    <RootStackNavigator.Navigator>
      <RootStackNavigator.Screen
        options={{ headerShown: false }}
        name="TabsBottomMenu"
        component={TabsBottomMenuStack}
      />
    </RootStackNavigator.Navigator>
  );
};
